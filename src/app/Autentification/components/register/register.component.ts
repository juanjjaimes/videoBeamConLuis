import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(){
    console.log("form");
    this.authService.register(this.userForm.value)
    .then(response => {
      console.log(response);
      this.authService.addUser(this.userForm.value);
    })
    .catch(error => console.error(error));

  }
  buildForm(){
    this.userForm = this.fb.group({
      name: ['asdasdsdsd', [Validators.required]], // primer argumento es el valor pord efecto, y el seundo son las validaciones un array o una sola validacion
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      roles: [''],
      state: ['false']
    });
  }

}
