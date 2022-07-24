import { Component, OnInit ,ViewChild} from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription, switchMap } from 'rxjs';
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

  alumnos$:Observable<Alumno[]>=of([]);
  refreshStudents$ =new BehaviorSubject<boolean>(true)

  constructor(private requests:RequestsService) { 
  }
  
  ngOnInit(): void {
     this.alumnos$ = this.refreshStudents$.pipe(switchMap(_=>this.requests.getStudents()))
   }
   
  newAlumno(alumno:Alumno){
    this.requests.newStudent(alumno).subscribe()
  }
 
  modificarAlumno(alumno:Alumno){
    this.requests.updateStudent(alumno).subscribe((res)=>{
      this.refreshStudents$.next(!this.refreshStudents$)
    })
  }
  
  deleteAlumno(id:number){
    this.requests.deleteStudent(id).subscribe((res)=>{
      this.refreshStudents$.next(!this.refreshStudents$)
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
}
