import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumnos';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  @ViewChild('closeModal') closeModal:any
  @ViewChild('editarAlumnoModal') editarAlumnoModal:any
  showModal:boolean = false;
  infoAlumno:Alumno = {nombre:'',apellido:'',edad:0,id:0}
  idCount:number = 0;
 
 
  alumnos: Alumno[] = [];
  constructor(private requests:RequestsService) { 
    
  }

   ngOnInit(): void {
    this.requests.getStudents().subscribe(val => {
      this.alumnos = val;
     })
   }
  newAlumno(alumno:Alumno){
    this.requests.newStudent(alumno).subscribe(()=>{
      this.requests.getStudents().subscribe(val => {
        this.alumnos = val;
       })
    })
   
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
    let index = this.alumnos.findIndex(x => x.id === alumno.id);
    this.alumnos[index] = alumno
    this.closeModal.nativeElement.click()
  }

  deleteAlumno(id:number){
    this.requests.deleteStudent(id).subscribe(val=>{
      this.requests.getStudents().subscribe(val => {
        this.alumnos = val;
       })
    })
  }
}
