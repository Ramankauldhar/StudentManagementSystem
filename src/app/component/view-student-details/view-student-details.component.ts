import { Component } from '@angular/core';
import { Student } from '../../model/student';
import { OnInit, Input } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { StudentListComponent } from '../../component/student-list/student-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.css']
})
export class ViewStudentDetailsComponent implements OnInit{
    id!: number;
    student!: Student;

  constructor(private route: ActivatedRoute,private router: Router,
    private stuService: StudentService) { }

  ngOnInit() {
    this.student = new Student();

    this.id = this.route.snapshot.params['id'];
    
    this.stuService.getStudent(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['students']);
  }
}
