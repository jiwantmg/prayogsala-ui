import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }
  
  addComment(data)
  {
    return this.http.post(`${environment.server}/comments`, data);
  }

  getCommentsByTopic(topicId)
  {
    return this.http.get(`${environment.server}/comments/topics/${topicId}`);
  }
}

