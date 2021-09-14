import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any = [];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postService.getPosts().subscribe((res: any) => {
      this.posts = res;
    });
  }
}
