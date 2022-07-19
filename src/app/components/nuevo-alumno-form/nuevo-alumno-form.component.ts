import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/interfaces/alumnos';

@Component({
  selector: 'app-nuevo-alumno-form',
  templateUrl: './nuevo-alumno-form.component.html',
  styleUrls: ['./nuevo-alumno-form.component.scss']
})
export class NuevoAlumnoFormComponent implements OnInit {
public formulario:FormGroup;
@Output() addAlumno = new EventEmitter<Alumno>();

  constructor(private fb: FormBuilder) { 
    this.formulario = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(2)]],
      apellido:['',[Validators.required,Validators.minLength(2)]],
      edad:['',[Validators.required,Validators.min(10)]]
    })
  }
  
  ngOnInit(): void {

  }
  agregarAlumno(alumno:Alumno){
    this.addAlumno.emit(this.formulario.value)
  }
}
