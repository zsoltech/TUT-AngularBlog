import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../serivces/post.service';
import { Post } from './post.model';
import { POSTS } from './post.storage';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  model: Array<Post>;

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    //this.model = POSTS;

    this.postService.getPosts_2().subscribe(data => {
      this.model = data;
    })
  }

  public onClick(post: Post): void {
    this.router.navigate(['/post', post.id]);
  }

  public onQuery(): void {
    this.router.navigate(['/post', 1], { queryParams: { id: 1, 'userId': 2 } });
  }
}
