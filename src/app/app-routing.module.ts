import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterStudentComponent } from './component/register-student/register-student.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { UpdateStudentDetailsComponent } from './component/update-student-details/update-student-details.component';
import { ViewStudentDetailsComponent } from './component/view-student-details/view-student-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
   {path:'registerStudent', component:RegisterStudentComponent},
  { path: 'update/:id', component: UpdateStudentDetailsComponent },
  { path: 'details/:id', component: ViewStudentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
