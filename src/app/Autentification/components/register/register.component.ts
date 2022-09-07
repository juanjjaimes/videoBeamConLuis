import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(){
    console.log("form")
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
