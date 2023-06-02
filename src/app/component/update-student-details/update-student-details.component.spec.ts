import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudentDetailsComponent } from './update-student-details.component';

describe('UpdateStudentDetailsComponent', () => {
  let component: UpdateStudentDetailsComponent;
  let fixture: ComponentFixture<UpdateStudentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateStudentDetailsComponent]
    });
    fixture = TestBed.createComponent(UpdateStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
