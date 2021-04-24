import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-new-chapter',
  templateUrl: './new-chapter.component.html',
  styleUrls: ['./new-chapter.component.css']
})
export class NewChapterComponent implements OnInit {

  form: FormGroup;
  submited = false;
  constructor(
    private fb: FormBuilder,
    private courserService: CourseService,
    @Inject(MAT_DIALOG_DATA) private data: number,
    private matDialogRef: MatDialogRef<NewChapterComponent>
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      order: [0, Validators.required],
      chapter: ['', Validators.required]
    });
    console.log(this.data);
  }

  get formControl()
  {
    return this.form.controls;
  }

  save() {
    this.submited = true;
    if(this.form.invalid) return;
    this.courserService.createChapter(this.form.value, this.data).subscribe(
      response=>{
        this.matDialogRef.close(true);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
