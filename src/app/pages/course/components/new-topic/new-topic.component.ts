import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
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
  form: UntypedFormGroup;  
  chapter: any;
  submited = false;
  constructor(
    private matDialogRef: MatDialogRef<NewTopicComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private courseService: CourseService
  ) {
    console.log(this.data); 
    this.chapter = this.data.chapter;
   }

  ngOnInit() {
    this.form = new UntypedFormGroup({
      order: new UntypedFormControl('', Validators.required),
      topic: new UntypedFormControl('', Validators.required)
    });
    this.setStep1();
  }

  get formControl()
  {
    return this.form.controls;
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
    this.submited = true;
    if(this.form.invalid) return;
    let { order, topic } = this.form.value;
    this.courseService.saveTopic({ order, topic},this.chapter.courseId,this.chapter.chapterId).subscribe(
      response=>{
        this.matDialogRef.close(true);
      },
      error=>{
        console.log(error);
      }
    );
  }


}
