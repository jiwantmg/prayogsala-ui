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

  getAllCourse() {
    return this.http.get(`${environment.server}/courses`);
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
    fd.append('topic', topic.topic);
    return this.http.post(`${environment.server}/courses/${chapter.id}/${topic.id}/video`, fd, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
