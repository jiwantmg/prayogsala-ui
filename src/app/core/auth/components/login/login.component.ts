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
  message: string = "";
  submited = false;
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

  get loginFormControl()
  {
    return this.form.controls;
  }

  save() {
    this.submited = true;
    // check if username or password is valid or invalid
    if(!this.form.valid) return;
    this.message = "";
    this.authService.login(this.form.value).subscribe(
      (res: any)=> {
        localStorage.setItem('auth_token', res.token);
        localStorage.setItem('firstName', res.firstName);
        localStorage.setItem('lastName', res.lastName);
        localStorage.setItem('email', res.email);
        this.store.dispatch(authAction.loginSuccessful({firstName: res.firstName, lastname: res.lastName, email: res.email}));
        this.store.dispatch(authAction.loadUserRole());
        this.router.navigate(['/course']);
      },
      err => {
        console.log(err);
        this.message = err ? err.error.message : ""
      }
    )    
  }

}
