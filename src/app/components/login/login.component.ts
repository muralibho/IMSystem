import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    
  public loginForm:FormGroup = new FormGroup(
    {
      email: new FormControl(null, [Validators.required, Validators.minLength(15), Validators.maxLength(20)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(15)])
    }
  )
  
  constructor(private _loginService:LoginService,private router:Router) { 
    this._loginService.login().subscribe(
      (data:any)=>{
           this.loginForm = data;
      },
      (err:any)=>{
         alert("Internal server error");
      }

    )
  }

  ngOnInit(): void {
  }

  login(){
    this._loginService.login().subscribe(
      (data:any)=>{
         sessionStorage.setItem("IMSystem-token", data.token);
        this.router.navigateByUrl("/dashboard");
       },
       (err:any)=>{
         alert("Invalid Credentials");
  }
    )
}
}
