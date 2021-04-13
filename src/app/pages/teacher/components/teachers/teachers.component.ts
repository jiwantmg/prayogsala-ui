import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as teacherAction from '../../store/teacher.actions';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: any[] = [];
  constructor(
    private store: Store<{teacher}>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(teacherAction.loadTeachers());   
    this.store.select(state => state.teacher).subscribe(
      teacherState => {
        this.teachers = teacherState.list;
      } 
    )
  }

}
