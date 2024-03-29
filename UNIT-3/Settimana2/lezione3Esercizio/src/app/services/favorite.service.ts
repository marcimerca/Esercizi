import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  favorites: Product[] = [];
  favoritesSub = new BehaviorSubject<Product[]>([]);

  constructor() {}

  addFavorite(product: Product) {
    const found = this.favorites.find((favProd) => {
      return favProd.id === product.id;
    });
    if (!found) {
      this.favorites.push(product);
      this.favoriteList();
    }
  }

  favoriteList() {
    this.favoritesSub.next(this.favorites);
  }
}
