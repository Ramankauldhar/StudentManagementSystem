import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

   private baseUrl = 'http://localhost:8088/springboot-crud-rest/api/v1/students';

  constructor(private http: HttpClient) { }

  getStudent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  registerStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, student);
  }

  updateStudentDetails(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAllStudentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}