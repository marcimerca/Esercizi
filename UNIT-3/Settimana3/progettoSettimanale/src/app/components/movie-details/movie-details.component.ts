import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;

  constructor(private movieSrv: MovieService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = +params['id'];
      this.movieSrv.getMovie(id).subscribe((data) => {
        this.movie = data;
      });
    });
  }
}
