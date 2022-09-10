import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }
 
  ngOnInit(): void { 
    
    this.buildForm();
  }

  login(){
    this.authService.login(this.loginForm.value)
      .then(response => {
        console.log(response);
        this.authService.getUserByEmail(response.user.email);
      })
      .catch(error => console.log(error));
    // this.router.navigateByUrl('/home/inicio');
  }
  buildForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

}
