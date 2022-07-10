import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumnos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  @ViewChild('closeModal') closeModal:any
  @ViewChild('editarAlumnoModal') editarAlumnoModal:any
  showModal:boolean = false;
  infoAlumno:Alumno = {nombre:'',apellido:'',edad:0,id:0}

 
 
  alumnos: Alumno[] = [
    { nombre: 'diego',apellido:'perez', edad: 19,id:0 },
    { nombre: 'ale',apellido:'fonsi', edad: 16 ,id:1},
    { nombre: 'gabriel',apellido:'juarez', edad: 25, id:2 },
  ];
  constructor() { 
    
  }

  newAlumno(alumno:Alumno){
    let newAlumno = alumno;
    alumno.id=this.alumnos.length;
    this.alumnos.push(alumno)
  }
 
  setearAlumnoAModificar(alumno:Alumno){
    this.infoAlumno = alumno
  }
  modificarAlumno(alumno:Alumno){
    this.alumnos[alumno.id] = alumno
    this.closeModal.nativeElement.click()

  }
}
