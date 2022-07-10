import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumnos';
@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.scss'],
})
export class ListaDeAlumnosComponent implements OnInit {
  @Input() listaDeAlumnos: Alumno[]=[];
  @Output() onClickAlumno = new EventEmitter<Alumno>();
  ageFilterMin:number = 0
  ageFilterMax:number = 100
  constructor() {}

  ngOnInit(): void {
  
  }
  editAlumno(alumno:Alumno){
    this.onClickAlumno.emit(alumno)
    
  }
  setAgeFilter(min:number,max:number){
    this.ageFilterMin = min;
    this.ageFilterMax = max;
  }
  
  delete(index:number):void {
    this.listaDeAlumnos.splice(index,1)
  }
}
