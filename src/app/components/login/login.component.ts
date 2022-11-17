import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  public email    : string = "";
  public password : string = "";

  public loginForm: FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.minLength(15), Validators.maxLength(20)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(15)])
    }
  )
  constructor() { }

  ngOnInit(): void {
  }

  login(){
    
  }

}
