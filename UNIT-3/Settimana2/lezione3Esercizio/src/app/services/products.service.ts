import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.interface';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl = 'https://dummyjson.com/products';

  myFavorites: Product[] = [];
  favorites = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<{ products: Product[] }>(this.apiUrl)
      .pipe(map((response) => response.products));
  }

  addToFavorite(product: Product) {
    const found = this.myFavorites.find((favProd) => favProd.id === product.id);
    if (!found) {
      this.myFavorites.push(product);
      this.favoriteList();
    }
  }

  removeFavorite(id: number) {
    const index = this.myFavorites.findIndex((product) => {
      return product.id == id;
    });
    this.favoriteList();
  }

  favoriteList() {
    this.favorites.next(this.myFavorites);
  }
}
