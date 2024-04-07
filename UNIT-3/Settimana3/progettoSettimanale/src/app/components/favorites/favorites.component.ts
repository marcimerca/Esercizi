import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { Favorite } from 'src/app/models/favorite.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  favorites!: Favorite[];

  constructor(private favSrv: FavoriteService) {}

  ngOnInit(): void {
    this.favSrv.getFavorites().subscribe((data) => {
      this.favorites = data;
      console.log(this.favorites);
    });
  }
}
