import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAlumnoFormComponent } from './nuevo-alumno-form.component';

describe('NuevoAlumnoFormComponent', () => {
  let component: NuevoAlumnoFormComponent;
  let fixture: ComponentFixture<NuevoAlumnoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoAlumnoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAlumnoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
