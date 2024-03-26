import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { FeaturedPostComponent } from './components/featured-post/featured-post.component';
import { SelectedPostsComponent } from './components/selected-posts/selected-posts.component';
import { LikeablePostsComponent } from './components/likeable-posts/likeable-posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'active',
    component: ActivePostsComponent,
  },
  {
    path: 'inactive',
    component: InactivePostsComponent,
  },
  {
    path: 'post/:id',
    component: PostDetailsComponent,
  },
];

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
    LikeablePostsComponent,
    SinglePostComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
