import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
    
  constructor(
    private http: HttpClient
  ) { }

  addNewCourse(form)
  {    
    return this.http.post(`${environment.server}/courses`, form, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  getAllCourse(data) {      
      return this.http.get(`${environment.server}/courses/${data.type}/all`);
  }

  getAllPublicCourse() {
    return this.http.get(`${environment.server}/categories/courses/tops`);
  }
  

  getCourse(id: string) {
    return this.http.get(`${environment.server}/courses/${id}`);
  }
 
  getChapters(id: string) {
    return this.http.get(`${environment.server}/courses/chapters`);
  }

  createChapter(value: any, id: number) {
    return this.http.post(`${environment.server}/courses/${id}/chapters`, {
      ChapterName: value.chapter,
      order: value.order,
      courseId: id
    });
  }

  saveTopic(data: { order: any; topic: any; }, courseId: number, chapterId: number) {
    return this.http.post(`${environment.server}/courses/${courseId}/chapters/${chapterId}/topics`, data);
  }
 

  uploadVideo(chapter: any, selectedFile: File, topic) {
    const fd = new FormData();
    fd.append('video',selectedFile, selectedFile.name);
    return this.http.post(`${environment.server}/courses/${chapter.courseId}/chapters/${chapter.chapterId}/topics/${topic.topicId}/video`, fd, {
      reportProgress: true,
      observe: 'events'
    });
  }

  getTopCourses() {
    return this.http.get(`${environment.server}/courses/tops`);
  }

  enrollStudent(id: any) {
    return this.http.put(`${environment.server}/courses/enroll/${id}`,{});
  }

  searchFor(string: string) {
    return this.http.get(`${environment.server}/courses/search?query=${string}`);
  }
 
  getCourseRates(courseId: number) {
    return this.http.get(`${environment.server}/courses/${courseId}/rates`);
  }

  addNewRateForCourse(rate: { courseId: number; rate: number; }) {
    return this.http.post(`${environment.server}/courses/${rate.courseId}/rates`, rate);
  }
}
