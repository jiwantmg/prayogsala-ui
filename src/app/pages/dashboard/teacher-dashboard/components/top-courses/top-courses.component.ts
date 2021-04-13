import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-courses',
  templateUrl: './top-courses.component.html',
  styleUrls: ['./top-courses.component.css']
})
export class TopCoursesComponent implements OnInit {
  courses: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.courses = [
      { id: 1, name: '2021 Complete Python Bootcamp From Zero to Hero in Python', studentCount: 200 },
      { id: 2, name: 'The Web Developer Bootcamp 2021', studentCount: 300 },
      { id: 3, name: 'Machine Learning A-Z™: Hands-On Python & R In Data Science', studentCount: 230 },
      { id: 4,  name: 'Java Programming Masterclass for Software Developers', studentCount: 100 },
      { id: 5,  name: 'The Complete JavaScript Course 2021: From Zero to Expert!', studentCount:300 },
      { id: 6,  name: 'The Complete 2021 Web Development Bootcamp', studentCount: 20 },
      { id: 7,  name: 'The Data Science Course 2021: Complete Data Science Bootcamp', studentCount: 50 },
      { id: 6,  name: 'The Complete 2021 Web Development Bootcamp', studentCount: 20 },
      { id: 7,  name: 'The Data Science Course 2021: Complete Data Science Bootcamp', studentCount: 50 },
      { id: 6,  name: 'The Complete 2021 Web Development Bootcamp', studentCount: 20 },
      { id: 7,  name: 'The Data Science Course 2021: Complete Data Science Bootcamp', studentCount: 50 },
    ];
  }


}
