import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { Favorite } from 'src/app/models/favorite.interface';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.interface';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthData } from 'src/app/models/auth-data.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favoriteMovies: Movie[] = [];
  user: AuthData | null = null;

  constructor(
    private favSrv: FavoriteService,
    private movieSrv: MovieService,
    private authSrv: AuthService
  ) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((user: AuthData | null) => {
      this.user = user;
      if (user) {
        this.getFavorites(Number(user.user.id)); // Chiamata per ottenere i preferiti dell'utente
      }
    });
  }

  getFavorites(userId: number): void {
    this.favSrv
      .getFavoritesByUserId(userId)
      .subscribe((favorites: Favorite[]) => {
        const movieIds = favorites.map((favorite) => favorite.movieId); // Ottieni gli ID dei film preferiti dell'utente
        // Recupera l'elenco completo di tutti i film disponibili
        this.movieSrv.getMovies().subscribe((movies: Movie[]) => {
          // Filtra i film preferiti dall'elenco completo dei film
          this.favoriteMovies = movies.filter((movie) =>
            movieIds.includes(movie.id)
          );
        });
      });
  }
}
