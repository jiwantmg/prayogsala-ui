import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import * as teacherAction from '../../store/teacher.actions';

@Component({
  selector: 'app-new-teacher',
  templateUrl: './new-teacher.component.html',
  styleUrls: ['./new-teacher.component.css']
})
export class NewTeacherComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fname: new FormControl([''], Validators.required),
    lname: new FormControl([''], Validators.required),
    email: new   FormControl([''], Validators.required),
    password  : new FormControl([''], Validators.required),
    phone: new FormControl([''], Validators.required),
    address: new FormControl([''], Validators.required),
  });
  constructor(
    private authService: AuthService,
    private store: Store<{teacher}>,
    private dialogRef: MatDialogRef<NewTeacherComponent>
  ) { }

  ngOnInit(): void {
  }

  register()
  {
     this.authService.addTeacher(this.form.value).subscribe(
       res => {
        this.store.dispatch(teacherAction.loadTeachers());   
        this.dialogRef.close();
       },
       err => {
         console.error(err);
       }
     )
  }

}
