import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products!: Product[];

  constructor(private productsSrv: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productsSrv.getProducts().subscribe((prods) => {
      this.products = prods;
    });
  }
  addToFavorites(product: Product) {
    this.productsSrv.addToFavorites(product);
  }
}
