import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) { }

  createStudent():Observable<any>{
          return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students");
  }
}
