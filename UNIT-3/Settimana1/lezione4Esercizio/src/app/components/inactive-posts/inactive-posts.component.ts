import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent {
  posts!: Post[];

  constructor() {
    this.getPosts();
  }

  async getPosts() {
    let response = await fetch('assets/db1.json');
    let data = await response.json();
    this.posts = data;
  }
}
