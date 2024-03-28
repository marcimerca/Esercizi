import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NvbarComponent } from './components/nvbar/nvbar.component';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NvbarComponent,
    FavoritesComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
