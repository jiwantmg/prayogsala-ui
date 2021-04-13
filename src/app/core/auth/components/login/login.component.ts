import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import * as authAction from '../../store/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store<{context}>
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  save() {
    let result = this.authService.login(this.form.value).subscribe(
      (res: any)=> {
        localStorage.setItem('auth_token', res.token);
        localStorage.setItem('firstName', res.firstName);
        localStorage.setItem('lastName', res.lastName);
        localStorage.setItem('email', res.email);
        this.store.dispatch(authAction.loginSuccessful({firstName: res.firstName, lastname: res.lastName, email: res.email}));
        this.store.dispatch(authAction.loadUserRole());
        this.router.navigate(['/pages']);
      },
      err => {

      }
    )
    if(result)
    {
      this.router.navigate(['pages/dashboard']);
    }else{
      alert("Username or password invalid");
    }
  }

}
