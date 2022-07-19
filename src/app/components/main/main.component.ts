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
  idCount:number = 0;
 
 
  alumnos: Alumno[] = [];
  constructor() { 
    
  }

  newAlumno(alumno:Alumno){
    let newAlumno = alumno;
    this.idCount++;
    alumno.id=this.idCount;
    this.alumnos.push(alumno)
  }
 
  setearAlumnoAModificar(alumno:Alumno){
    this.infoAlumno = alumno
    this.editarAlumnoModal.formulario.setValue({
      nombre:alumno.nombre,
      apellido:alumno.apellido,
      edad:alumno.edad,
    })

  }
  modificarAlumno(alumno:Alumno){
    console.log(this.alumnos)
    console.log(alumno)
    let index = this.alumnos.findIndex(x => x.id === alumno.id);
    this.alumnos[index] = alumno
    this.closeModal.nativeElement.click()
  }

  deleteAlumno(index:number){
    this.alumnos.splice(index,1)
  }
}
