import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as teacherAction from '../../store/teacher.actions';
import { NewTeacherComponent } from '../new-teacher/new-teacher.component';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: any[] = [];
  constructor(
    private store: Store<{teacher}>,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.store.dispatch(teacherAction.loadTeachers());   
    this.store.select(state => state.teacher).subscribe(
      teacherState => {
        this.teachers = teacherState.list;
      } 
    )
  }

  updateTeacher(teacher)
  {
    this.dialog.open(NewTeacherComponent, {
      minHeight: '400px',
      minWidth: '400px',
      data: {
        teacher: teacher
      }
    });
  }

}
