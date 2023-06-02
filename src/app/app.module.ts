import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterStudentComponent } from './component/register-student/register-student.component';
import { ViewStudentDetailsComponent } from './component/view-student-details/view-student-details.component';
import { StudentListComponent } from './component/student-list/student-list.component';
import { HttpClientModule } from "@angular/common/http";
import { UpdateStudentDetailsComponent } from './component/update-student-details/update-student-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterStudentComponent,
    ViewStudentDetailsComponent,
    StudentListComponent,
    UpdateStudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
