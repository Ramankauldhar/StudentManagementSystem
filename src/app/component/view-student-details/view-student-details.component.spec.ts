import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudentDetailsComponent } from './view-student-details.component';

describe('ViewStudentDetailsComponent', () => {
  let component: ViewStudentDetailsComponent;
  let fixture: ComponentFixture<ViewStudentDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewStudentDetailsComponent]
    });
    fixture = TestBed.createComponent(ViewStudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
