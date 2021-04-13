import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CourseService } from 'src/app/core/services/course.service';
import { NewChapterComponent } from '../new-chapter/new-chapter.component';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  private sub: any;
  id: string = null;
  course: any = null;
  syllabus: any[] = [];
  utype: string = undefined;

  constructor(
    private matDialog: MatDialog,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private store: Store<{course, context}>

  ) { }

  ngOnInit(): void {
    this.store.select(state => ({course: state.course, context: state.context})).subscribe(
      res => {
        this.utype = res.context.auth.user.role;
      }
    );

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getCourse();
    });
  }

  getCourse(){
    this.courseService.getCourse(this.id).subscribe(
      (response: any)=>{
        this.course = response;
        //this.getSyllabus();
        this.syllabus = response.chapters;        
      },
      error=>{
        console.log(error); 
      }
    )
  }

  getSyllabus(){
    this.courseService.getChapters(this.id).subscribe(
      (response: any)=> {
        this.syllabus = response.chapters;
      },
      error=>{
        console.log(error);
      }
    )
  }

  newChapter() {
    const dialog = this.matDialog.open(NewChapterComponent, {
      data: this.id
    });

    
    dialog.afterClosed().subscribe(
      res => {
        if(res)
          this.getCourse();
      }
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
