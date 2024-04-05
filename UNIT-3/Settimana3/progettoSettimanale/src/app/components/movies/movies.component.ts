import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies!: Movie[];

  constructor(private movieSrv: MovieService) {}

  ngOnInit(): void {
    this.movieSrv.getMovies().subscribe((data) => {
      this.movies = data;
    });
  }
}
