import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
  posts!: Post[];

  constructor() {
    this.getPosts().then((data) => {
      this.posts = data;
      console.log(this.posts);
    });
  }
  async getPosts() {
    let response = await fetch('assets/db1.json');
    let data = await response.json();
    return data;
  }
}
