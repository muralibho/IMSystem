import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  public studentForm: FormGroup = new FormGroup(
    {
       name:    new FormControl(),
       gender:  new FormControl(),
       mobile:  new FormControl(),
       email:   new FormControl(),
       batch:   new FormControl(),
       address: new FormGroup(
        {
          city: new FormControl(),
          mandal: new FormControl(),
          district: new FormControl(),
          state: new FormControl(),
          pincode: new FormControl()
        }
       )

    }
  )
  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
  }
  submit(){
       this._studentService.createStudent().subscribe(
        (data:any)=>{
          alert("created successfully");
            
        },
        (err:any)=>{
           alert("Internal server error");
        }
       )  
  }

}
