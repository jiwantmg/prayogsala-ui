import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CommentsComponent,
    CommentCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommentsComponent
  ]
})
export class ChatModule { }
