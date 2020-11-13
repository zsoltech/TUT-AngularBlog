import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../posts/post.model';
import { POSTS } from '../posts/post.storage';
import { PostService } from '../serivces/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  model: Post;

  constructor(private activedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    const id = +this.activedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.postService.getPost(id).subscribe(data => {
        this.model = data;
      });
    }

    //QUERY
    this.activedRoute.queryParams.subscribe(params => {
      console.log(params);
    });
  }

}
