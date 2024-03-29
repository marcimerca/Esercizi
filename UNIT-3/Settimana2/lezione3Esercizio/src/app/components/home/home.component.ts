import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/services/products.service';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products!: Product[];
  isButtonDisabled: boolean = false;
  constructor(
    private productsSrv: ProductsService,
    private favouriteSrv: FavoriteService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsSrv.getProducts().subscribe((prods) => {
      this.products = prods;
    });
  }
  addToFavorites(product: Product) {
    this.favouriteSrv.addFavorite(product);
    this.isButtonDisabled = true;
  }
}
