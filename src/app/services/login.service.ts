import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  

  constructor(private _httpClient:HttpClient) {
    
   }
   login(data:any):Observable<any>
   {
    return this._httpClient.get("https://reqres.in/api/login", data);
   }

}
