import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {


    public id:string = "";
    public student:any = {};

  constructor(private _studentService:StudentService, private _activatedRoute:ActivatedRoute) {
    this._activatedRoute.params.subscribe(
      (data:any)=>{
        this.id = data.id;
        this._studentService.getStudent(data.id).subscribe(
          (data:any)=>{
            this.student = data;
          }
        )
      }
    )
   }
  
  ngOnInit(): void {
  }

}
