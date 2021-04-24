import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommentService } from 'src/app/core/services/comment.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {  
  comment: string = "";
  @Input("topic") topic: any;
  @Output("onEventAdd") onEventAdd = new EventEmitter();;
  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit(): void {
    
  }

  onEnter(event)
  {
    if(event.key === "Enter")
    {      
      this.commentService.addComment({
        text: this.comment, 
        topicId: this.topic.topicId, 
        courseId: this.topic.courseId,
        chapterId: this.topic.chapterId
      }).subscribe(
        res => {          
          this.onEventAdd.emit(true);
          this.comment = "";
        },
        err => {
          console.error(err);
        }
      )
      event.preventDefault();
    }        
  }
}