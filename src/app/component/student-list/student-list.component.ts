import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { StudentService } from "../../services/student.service";
import { Student } from "../../model/student";
import { Router } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  students!: Observable<Student[]>;

  constructor(private stuService: StudentService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.students = this.stuService.getAllStudentsList();
  }

  deleteStudentDetailsById(id: number) {
    this.stuService.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  studentDetailsById(id: number){
    this.router.navigate(['details', id]);
  }

  updateStudentDetailsById(id:number){
    this.router.navigate(['update', id]);
  }
}
