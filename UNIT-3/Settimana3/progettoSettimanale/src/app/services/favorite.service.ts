import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Favorite } from '../models/favorite.interface';
import { environment } from 'src/environments/environment.development';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  getFavorites() {
    return this.http.get<Favorite[]>(`${this.apiURL}favorites`);
  }
  getFavoritesByUserId(userId: number) {
    return this.http
      .get<Favorite[]>(`${this.apiURL}favorites`)
      .pipe(
        map((favorites: Favorite[]) =>
          favorites.filter((favorite) => favorite.userId === userId)
        )
      );
  }

  addToFavorites(favorite: Favorite) {
    return this.http.post<any>(`${this.apiURL}favorites`, favorite);
  }

  removeFromFavorites(favoriteId: number) {
    return this.http.delete<any>(`${this.apiURL}favorites/${favoriteId}`);
  }

  toggleFavorite(userId: number, movieId: number) {
    // Verifica se il film è già tra i preferiti
    return this.getFavoritesByUserId(userId).pipe(
      switchMap((favorites: Favorite[]) => {
        const favorite = favorites.find((fav) => fav.movieId === movieId);
        if (favorite) {
          // Se il film è già nei preferiti, rimuovilo
          return this.removeFromFavorites(favorite.id!);
        } else {
          // Se il film non è nei preferiti, aggiungilo
          return this.addToFavorites({ userId, movieId });
        }
      })
    );
  }
}
