import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    userId: new FormControl(-1, Validators.required),
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    email: new   FormControl('', Validators.required),
    password  : new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });
  constructor(
    private authService: AuthService,
    private store: Store<{teacher}>,
    private dialogRef: MatDialogRef<NewTeacherComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if(this.data && this.data.teacher)
    {
      let t = this.data.teacher;
      this.form.get('userId').setValue(t.userId);
      this.form.get('fname').setValue(t.firstName);
      this.form.get('lname').setValue(t.lastName);
      this.form.get('email').setValue(t.email);      
      this.form.get('phone').setValue(t.phoneNo);
      this.form.get('address').setValue(t.address);      
    }
  }

  get isNew()
  {
    return this.form.get('userId').value === -1;
  }

  register()
  {
     this.authService.addOrUpdateTeacher(this.form.value).subscribe(
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
