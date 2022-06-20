import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserTypeService } from 'src/app/services/user-type.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  invalidForm: boolean = false;
  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(3)),
  });

  get formControlers() {
    return this.loginForm.controls;
  }

  constructor(private router: Router, private userType: UserTypeService) {}

  login() {
    if (this.loginForm.valid) {
      if (this.loginForm.value.name?.toLowerCase() === 'forman') {
        this.userType.setUserType('forman');
      }else{
        this.userType.setUserType('SiteEngineers');  
      }
      this.router.navigate(['/home']);
    } else {
      this.invalidForm = true;
    }
  }
}
