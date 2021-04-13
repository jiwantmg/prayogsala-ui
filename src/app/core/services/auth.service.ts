import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(
    private http: HttpClient
  ) { }

  login(form)
  {
    return this.http.post(`${environment.server}/users/login`, form);
  }

  register(user)
  {
    return this.http.post(`${environment.server}/users`, user);
  }

  loadUserRole()
  {   
    return this.http.get(`${environment.server}/users/role`);
  }

  addTeacher(teacher) {
    return this.http.post(`${environment.server}/teachers`, teacher);
  }
}
