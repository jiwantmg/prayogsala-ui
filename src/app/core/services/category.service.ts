import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) {}

  addOrUpdateCategory(data) {    
    if(data.id)
    {
      return this.http.put(`${environment.server}/categories/${data.id}`, data);
    }else{
      return this.http.post(`${environment.server}/categories`, data);
    }    
  }

  getAllCategories() {
    return this.http.get(`${environment.server}/categories`);
  }

  getCoursesByCategory(category: string) {
    return this.http.get(`${environment.server}/categories/${category}/courses`);
  }
 
}
