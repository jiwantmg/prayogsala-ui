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
    if(form.email == 'demo@gmail.com' && form.password == 'password')
    {
      let token = "Thisisaverysecettoken";
      localStorage.setItem('token', token);
      return true;
    }

    return false;
  }

  register(user)
  {
    return this.http.post(`${environment.server}/users`, user);
  }
}
