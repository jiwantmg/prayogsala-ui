import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CourseService } from 'src/app/core/services/course.service';
import { CourseVideoComponent } from '../course-video/course-video.component';
import { PreviewVideoComponent } from '../preview-video/preview-video.component';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  @Input("chapter") chapter: any;
  @Input("topics") topics: any[] = [];
  utype: string = undefined;
  constructor(
    private matDialog: MatDialog,
    private courseService: CourseService,
    private store: Store<{context}>
  ) {
   }

  ngOnInit() {    
    this.store.select(state => state.context).subscribe(
      res => {
        console.log(res.auth.user.role);
        if(res)
          this.utype = res.auth.user.role;
      }
    )
  }

  preview(topic) {
    const dialog = this.matDialog.open(PreviewVideoComponent,{
      data: {
        video: topic.video
      },
      panelClass: 'mat-dialog-padding-0'
    });     
 }
 
 uploadVideo(topic) {
  const dialog = this.matDialog.open(CourseVideoComponent,{
    data: {
      topic: topic,
      chapter: this.chapter
    }
  });   
 }

 deleteTopic(topic) {
    // this.courseService.deleteTopic(this.chapter.id, topic.id).subscribe(
    //   response=>{
    //     console.log(response);
    //   },
    //   error=>{
    //     console.log(error);
    //   }
    // );
 }


}
