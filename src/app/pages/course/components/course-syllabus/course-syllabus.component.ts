import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { NewTopicComponent } from '../new-topic/new-topic.component';

@Component({
  selector: 'app-course-syllabus',
  templateUrl: './course-syllabus.component.html',
  styleUrls: ['./course-syllabus.component.css']
})
export class CourseSyllabusComponent implements OnInit {
  step = -1;
  @Input("course") course: any;
  @Input("syllabus") syllabus: any[] = [];
  @Input("paidStatus") paidStatus: any;
  utype: string = undefined;

  constructor(
    private matDialog: MatDialog,
    private store: Store<{context}>
  ) { }

  ngOnInit(): void {
    console.log(this.syllabus);
    this.store.select(state => state.context).subscribe(
      res => {        
        this.utype = res.auth.user.role;
      }
    )
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }  

  openNewTopic(chapter){
    const dialog = this.matDialog.open(NewTopicComponent,{
      data: {
        chapter: chapter,
      },
      minHeight: '150px'
    });
    if(dialog){
      // reload chapters      
    } 
  }
  getLectureNumber(topics){
    if (topics.length === 0) return "No Lectures";
    return topics.length + " Lectures";
  }


}
