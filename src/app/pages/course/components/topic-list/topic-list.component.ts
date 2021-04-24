import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { CourseService } from 'src/app/core/services/course.service';
import { CourseVideoComponent } from '../course-video/course-video.component';
import { PreviewVideoComponent } from '../preview-video/preview-video.component';
import { PurchaseCourseComponent } from '../purchase-course/purchase-course.component';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  @Input("chapter") chapter: any;
  @Input("topics") topics: any[] = [];
  @Input("paidStatus") paidStatus: any;
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
    console.log(this.chapter);
    console.log(this.paidStatus);
    // check if user has paid for the course or not
    if(this.utype == 'teacher'){
      this.previewVideo(topic);
    } else if(this.chapter.order != 1 && (!this.paidStatus || this.paidStatus.status != "purchased")){
      this.makePurchase();
      return;
    }else{
      this.previewVideo(topic);
    }
  }

  previewVideo(topic)
  {
    const dialog = this.matDialog.open(PreviewVideoComponent,{
      data: {
        topic: topic,
        chapter: this.chapter
      },
      panelClass: 'full-screen-modal',      
    });            
  }
 
 uploadVideo(topic) {
  const dialog = this.matDialog.open(CourseVideoComponent,{
    data: {
      topic: topic,
      chapter: this.chapter
    },
    width: '100%'    
  });   
 }

 makePurchase()
 {
   const dialog = this.matDialog.open(PurchaseCourseComponent, {
    data: {
      chapter: this.chapter
    },
    panelClass: 'mat-dialog-padding-0'
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
