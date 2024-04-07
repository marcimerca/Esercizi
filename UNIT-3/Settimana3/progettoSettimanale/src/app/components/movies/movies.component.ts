import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.interface';
import { FavoriteService } from 'src/app/services/favorite.service';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthData } from 'src/app/models/auth-data.interface';
import { Favorite } from 'src/app/models/favorite.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  user: AuthData | null = null;
  favoriteMovieIds: number[] = [];
  userFavorites: Favorite[] = [];
  favoriteIds!: any;

  constructor(
    private movieSrv: MovieService,
    private favSrv: FavoriteService,
    private authSrv: AuthService
  ) {}

  ngOnInit(): void {
    this.movieSrv.getMovies().subscribe((data: Movie[]) => {
      this.movies = data;
      this.getFavorites(); // Qui chiami getFavorites per ottenere i preferiti dell'utente
    });

    this.authSrv.user$.subscribe((user: AuthData | null) => {
      this.user = user;
      if (user) {
        this.getFavorites(); // Qui chiami getFavorites per ottenere i preferiti dell'utente
      }
    });
  }

  getFavorites(): void {
    if (this.user) {
      this.favSrv
        .getFavoritesByUserId(Number(this.user.user.id))
        .subscribe((data: Favorite[]) => {
          this.userFavorites = data;
          console.log('User favorites:', data);
          this.favoriteMovieIds = data.map((favorite) => favorite.movieId);
          this.favoriteIds = data.map((favorite) => favorite.id);
          console.log(this.favoriteIds);
          console.log(
            "ID dei film preferiti dell'utente:",
            this.favoriteMovieIds
          ); // Console log qui
          this.updateFavorites(); // Chiami updateFavorites dopo aver ottenuto i preferiti
        });
    }
  }

  updateFavorites(): void {
    if (this.movies.length > 0 && this.favoriteMovieIds.length > 0) {
      this.movies.forEach((movie) => {
        const isFavourite = this.favoriteMovieIds.includes(movie.id);
      });
    }
  }

  toggleFavorite(movie: Movie): void {
    const isFavorite = this.favoriteMovieIds.includes(movie.id); // Verifica se il film è nei preferiti
    if (isFavorite) {
      // Se il film è già nei preferiti, rimuovilo
      const favorite = this.userFavorites.find(
        (fav) => fav.movieId === movie.id
      ); // Trova l'oggetto favorite relativo al film corrente
      if (favorite) {
        this.favSrv.removeFromFavorites(favorite.id!).subscribe(
          () => {
            // Aggiorna lo stato locale dei preferiti dopo la rimozione
            this.userFavorites = this.userFavorites.filter(
              (fav) => fav.id !== favorite.id
            );
            this.getFavorites(); // Aggiorna i preferiti dopo la rimozione
          },
          (error) => {
            console.error('Errore durante la rimozione del preferito:', error);
          }
        );
      }
    } else {
      // Se il film non è nei preferiti, aggiungilo
      this.favSrv
        .addToFavorites({
          userId: Number(this.user?.user.id),
          movieId: movie.id,
        })
        .subscribe(() => {
          this.getFavorites(); // Aggiorna i preferiti dopo l'aggiunta
        });
    }
  }
}
