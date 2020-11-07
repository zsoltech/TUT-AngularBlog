import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../posts/post.model';
import { POSTS } from '../posts/post.storage';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  model: Post;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.activedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.model = POSTS.filter(x => x.id == id)[0];
    }

    //QUERY
    this.activedRoute.queryParams.subscribe(params => {
      console.log(params);
    });
  }

}
