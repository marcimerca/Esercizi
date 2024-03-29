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

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<{ products: Product[] }>(this.apiUrl)
      .pipe(map((response) => response.products));
  }
}
