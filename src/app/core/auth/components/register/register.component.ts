import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: UntypedFormGroup = new UntypedFormGroup({
    fname: new UntypedFormControl('', Validators.required),
    lname: new UntypedFormControl('', Validators.required),
    email: new  UntypedFormControl('', Validators.required),
    password  : new UntypedFormControl('', Validators.required),
    phone: new UntypedFormControl('', Validators.required),
    address: new UntypedFormControl('', Validators.required)
  });

  submited = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  get registerFormControl()
  {
    return this.form.controls;
  }

  register()
  {
    this.submited = true;    
    if(this.form.invalid) return;
     this.authService.register(this.form.value).subscribe(
       res => {
        this.router.navigate(['/login']);
       },
       err => {
         console.error(err);
       }
     );
  }

}
