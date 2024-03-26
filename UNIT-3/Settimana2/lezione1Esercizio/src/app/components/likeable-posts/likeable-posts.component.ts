import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-likeable-posts',
  templateUrl: './likeable-posts.component.html',
  styleUrls: ['./likeable-posts.component.scss'],
})
export class LikeablePostsComponent {
  posts: Post[] = [];
  numPosts: number = 4;
  randomIndex!: number;

  constructor() {
    this.getPosts().then((data) => {
      for (let i = 0; i < this.numPosts; i++) {
        this.randomIndex = Math.floor(Math.random() * data.length);
        this.posts.push(data[this.randomIndex]);
        console.log(this.posts);
      }
    });
  }
  async getPosts() {
    let response = await fetch('assets/db1.json');
    let data = await response.json();
    return data;
  }
}
