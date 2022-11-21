import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {


   public term:string ="";
   public column:string="";
   public order:string="";
  // public name:string="";
  // public avatar:string="";
  // public mobile:number=0;
  // public gender:string="";
  // public batch:number=0;
  // public package:number=0;
  // public percentage:number=0;
  // public district:string="";
  // public state:string="";
  // public companyname:string="";

  public students: any=[];

  constructor(private _studentService:StudentService,private router:Router) {
    this._studentService.getStudents().subscribe(
      (data:any)=>{
        this.students =data;
      },
      (err:any)=>{
        alert("Internal sever error");
      }
    )
   }

  ngOnInit(): void {
  }

  filter(){
    this._studentService.getFilteredStudents(this.term).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

  pagination(page:number){
    this._studentService.getPagedStudents(page).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
  sort(){
    this._studentService.getSortedStudents(this.column,this.order).subscribe(
      (data:any)=>{
        this.students = data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
  delete(id:string){
  this._studentService.deleteStudent(id).subscribe(
    (data:any)=>{
      alert("deleted succefully!!!");
      location.reload();
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
  }
  view(id:string){
  this.router.navigateByUrl('/dashboard/student-details/'+id);
  }
  edit(id:string){
    this.router.navigateByUrl('/dashboard/edit-student/'+id);
  }
}


