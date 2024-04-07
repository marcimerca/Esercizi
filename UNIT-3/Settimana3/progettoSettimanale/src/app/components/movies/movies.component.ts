import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.interface';
import { FavoriteService } from 'src/app/services/favorite.service';
import { AuthService } from 'src/app/auth/auth.service';
import { AuthData } from 'src/app/models/auth-data.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies!: Movie[];
  user!: AuthData | null;

  constructor(
    private movieSrv: MovieService,
    private favSrv: FavoriteService,
    private authSrv: AuthService
  ) {}

  ngOnInit(): void {
    this.movieSrv.getMovies().subscribe((data) => {
      this.movies = data;
    });

    this.authSrv.user$.subscribe((user) => {
      this.user = user;
      console.log(this.user);
    });
  }
}
