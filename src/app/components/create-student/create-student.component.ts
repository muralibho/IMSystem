import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  public studentForm: FormGroup = new FormGroup(
    {
       name:    new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(10)]),
       gender:  new FormControl(),
       mobile:  new FormControl(null, [Validators.required, Validators.min(1000000000),Validators.max(999999999)]),
       email:   new FormControl(),
       batch:   new FormControl(),
       address: new FormGroup(
        {
          city: new FormControl(),
          mandal: new FormControl(),
          district: new FormControl(),
          state: new FormControl(),
          pincode: new FormControl(null, [Validators.required, Validators.min(100000),Validators.max(999999)])
        }
       ),
        
        company: new FormGroup(
          {
            name: new FormControl(),
            location: new FormControl(),
            package: new FormControl(),
            offerDate: new FormControl()
          }
        ),
        educations: new FormArray([]),
        sourcetype: new FormControl(),
        sourceFrom: new FormControl(),
        referalName: new FormControl()

    }
  )
  
        get educationFormArray(){
             {
               return this.studentForm.get('educations') as FormArray;
             }
         }
      add(){
      this.educationFormArray.push(
           new FormGroup(
            {
              qualification: new FormControl(),
              year: new FormControl(),
              percentage: new FormControl()
            }
           )
      )
  }
  delete(i:number){
      this.educationFormArray.removeAt(i);
  }

  public id: string= "";

  constructor(private _studentService:StudentService, private activatedRoute:ActivatedRoute) {
        this.activatedRoute.params.subscribe(
          (data:any)=>{
            this.id=data.id;
    this._studentService.getStudent(this.id).subscribe(
      (data:any)=>{
        this.studentForm.patchValue(data);
      }
    )
    }
    )
   }
    

  ngOnInit(): void {
  }
  submit(){
    if(this.id){
      // edit
      this._studentService.updateStudent(this.id, this.studentForm.value).subscribe(
        (data:any)=>{
          alert("updated successfully");
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
    else{
    // create
       this._studentService.createStudent(this.studentForm.value).subscribe(
        (data:any)=>{
          alert("created successfully"); 
        },
        (err:any)=>{
           alert("Internal server error");
        }
       )  
  }

  }
}
