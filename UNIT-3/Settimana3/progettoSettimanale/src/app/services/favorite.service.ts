import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favorite } from '../models/favorite.interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getFavorites() {
    return this.http.get<Favorite[]>(`${this.apiURL}favorites`);
  }
}
