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

  addNewCategory(data) {
    return this.http.post(`${environment.server}/categories?name=${data.category}&link=${data.link}`, {});
  }

  getAllCategories() {
    return this.http.get(`${environment.server}/categories`);
  }
}
