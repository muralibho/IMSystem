import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{path:'login', component:LoginComponent},
 {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard], children:[
      {path:'create-student', component:CreateStudentComponent},
        {path:'all-students', component:AllStudentsComponent},
        {path:'student-details/id',component:StudentDetailsComponent}
      ]},
       {path:'', component:LoginComponent},
       {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
