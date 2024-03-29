import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/services/products.service';
import { FavoriteService } from 'src/app/services/favorite.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit, OnDestroy {
  myFavorites: Product[] = [];

  constructor(private favoriteSrv: FavoriteService) {}

  ngOnInit(): void {
    this.favoriteSrv.favoritesSub.subscribe((results) => {
      this.myFavorites = results;
    });
  }

  ngOnDestroy(): void {}
}
