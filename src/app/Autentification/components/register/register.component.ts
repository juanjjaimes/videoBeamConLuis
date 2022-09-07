import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }



  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(){
    console.log("form")
  }
  buildForm(){
    this.userForm = this.fb.group({

    });
  }

}
