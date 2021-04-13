import { HttpEventType } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/core/services/course.service';

@Component({
  selector: 'app-course-video',
  templateUrl: './course-video.component.html',
  styleUrls: ['./course-video.component.css']
})
export class CourseVideoComponent implements OnInit {

  selectedFile = null;
  status: string = "";
  @Input("chapter") chapter: any;
  @Input("topic") topic: string = "";
  constructor(    
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { 
  }

  ngOnInit() {
    if(this.data) {      
      this.topic = this.data.topic;
      this.chapter = this.data.chapter;
    }
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {    
    this.courseService.uploadVideo(this.chapter,this.selectedFile, this.topic).subscribe(
      response=>{
        if(response.type === HttpEventType.UploadProgress){
          let per = response.loaded / response.total;          
          per = Math.round(per * 100);
          this.status = per+"%";
        }else if(response.type === HttpEventType.Response){
          console.log(event);
        }
      },
      error => {
        console.log(error);
      }
    )
  }


}
