import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/core/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input("topic") topic: any;
  comments: any[] = [];
  
  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments()
  {
    this.commentService.getCommentsByTopic(this.topic.topicId).subscribe(
      (res: any[]) => {
        this.comments = res;
      },
      err => {
        console.error(err);
      }
    )
  }

}
