import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentButtonComponent } from './delete-student-button.component';

describe('DeleteStudentButtonComponent', () => {
  let component: DeleteStudentButtonComponent;
  let fixture: ComponentFixture<DeleteStudentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteStudentButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteStudentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
