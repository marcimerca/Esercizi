import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get<Movie[]>(`${this.apiURL}movies-popular`);
  }

  getMovie(id: number) {
    return this.http.get<Movie>(`${this.apiURL}movies-popular/${id}`);
  }
}
