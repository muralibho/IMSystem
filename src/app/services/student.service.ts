import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) { }

  getStudents():Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students");
  }
  getStudent(id:string):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+id);
  }
  getFilteredStudents(term:string):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students"+term);
  }
  getPagedStudents(page:number):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?limit=10&page=1"+page);
  }
  getSortedStudents(column:string,order:string):Observable<any>{
    return this._httpClient.get("https://62b9299dff109cd1dc8ca34f.mockapi.io/students'+'?sortBy="+column+'&order='+order);
  }
  createStudent(data:any):Observable<any>{
      return this._httpClient.post("https://62b9299dff109cd1dc8ca34f.mockapi.io/students", data);
     }
  
  deleteStudent(id:string):Observable<any>{
    return this._httpClient.delete("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+id);
}
   updateStudent(id:string,data:any):Observable<any>{
     return this._httpClient.put("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+id,data);
   }
}
