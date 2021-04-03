import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fname: new FormControl([''], Validators.required),
    lname: new FormControl([''], Validators.required),
    email: new   FormControl([''], Validators.required),
    password  : new FormControl([''], Validators.required),
    phone: new FormControl([''], Validators.required),
    address: new FormControl([''], Validators.required),
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register()
  {
     this.authService.register(this.form.value).subscribe(
       res => {
        this.router.navigate(['/login']);
       },
       err => {
         console.error(err);
       }
     )
  }

}
