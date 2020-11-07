import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from './post.model';
import { POSTS } from './post.storage';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  model: Array<Post>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.model = POSTS;
  }

  public onClick(post: Post): void {
    this.router.navigate(['/post', post.id]);
  }

  public onQuery(): void {
    this.router.navigate(['/post', 1], { queryParams: { id: 1, 'userId': 2 } });
  }
}
