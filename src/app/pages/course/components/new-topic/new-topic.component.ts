import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-new-topic',
  templateUrl: './new-topic.component.html',
  styleUrls: ['./new-topic.component.css']
})
export class NewTopicComponent implements OnInit {
  step1 = true;
  step2 = false;
  order: FormControl = new FormControl([''], Validators.required);
  topic: FormControl = new FormControl([''], Validators.required);
  chapter: any;
  constructor(
    private matDialogRef: MatDialogRef<NewTopicComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private courseService: CourseService
  ) {
    console.log(this.data); 
    this.chapter = this.data.chapter;
   }

  ngOnInit() {
    this.setStep1();
  }

  setStep1(){
    this.step1 = true;
    this.step2 = false;
  }

  setStep2() {
    this.step1 = false;
    this.step2 = true;
  }

  save(){
    this.courseService.saveTopic({
      order: this.order.value,
      topic: this.topic.value
    },this.chapter.courseId,this.chapter.chapterId).subscribe(
      response=>{
        this.matDialogRef.close(true);
      },
      error=>{
        console.log(error);
      }
    );
  }


}
