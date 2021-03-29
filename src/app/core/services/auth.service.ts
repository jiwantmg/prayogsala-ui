import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
