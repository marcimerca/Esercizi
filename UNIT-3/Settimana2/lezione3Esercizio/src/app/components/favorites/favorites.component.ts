import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/services/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit, OnDestroy {
  myFavorites: Product[] = [];
  private favoritesSubscription!: Subscription;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.favoritesSubscription = this.productsService.favorites$.subscribe(
      (favorites) => {
        this.myFavorites = favorites;
      }
    );
  }

  ngOnDestroy(): void {
    this.favoritesSubscription.unsubscribe();
  }
}
