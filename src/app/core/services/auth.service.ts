import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  addOrUpdateTeacher(teacher) {
    // check if this is new or old
    if(teacher.userId != -1)
    {
      return this.http.put(`${environment.server}/teachers`, teacher);
    }

    return this.http.post(`${environment.server}/teachers`, teacher);
  }
}
