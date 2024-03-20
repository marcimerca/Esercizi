import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { FeaturedPostComponent } from './components/featured-post/featured-post.component';
import { SelectedPostsComponent } from './components/selected-posts/selected-posts.component';
import { LikeablePostsComponent } from './components/likeable-posts/likeable-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    NavbarComponent,
    PostDetailsComponent,
    FeaturedPostComponent,
    SelectedPostsComponent,
    LikeablePostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
