import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((res) => res));
  }
}
