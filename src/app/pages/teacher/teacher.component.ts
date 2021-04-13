import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTeacherComponent } from './components/new-teacher/new-teacher.component';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {  
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {   
  }

  openTeacherForm()
  {
    this.dialog.open(NewTeacherComponent, {
      minHeight: '400px',
      minWidth: '400px'
    });
  }
}
