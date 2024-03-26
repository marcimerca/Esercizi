import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
  selector: 'app-featured-post',
  templateUrl: './featured-post.component.html',
  styleUrls: ['./featured-post.component.scss'],
})
export class FeaturedPostComponent {
  post!: Post;

  constructor() {
    this.getPost().then((data) => {
      this.post = data[Math.floor(Math.random() * data.length)];
    });
  }
  async getPost() {
    let response = await fetch('assets/db1.json');
    let data = await response.json();
    return data;
  }
}
