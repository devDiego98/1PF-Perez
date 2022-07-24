import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumnos';
import { RequestsService } from 'src/app/services/requests.service';
@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.scss'],
})
export class ListaDeAlumnosComponent implements OnInit {
  @Input() listaDeAlumnos$:Observable<Alumno[]>= of([]);
  @Output() onClickAlumno = new EventEmitter<Alumno>();
  @Output() deleteAlumno = new EventEmitter<number>();
  ageFilterMin:number = 0
  ageFilterMax:number = 100
  constructor(private requests:RequestsService) {}

  ngOnInit(): void {
  
  }
  editAlumno(alumno:Alumno){
    this.onClickAlumno.emit(alumno)
    
  }
  setAgeFilter(min:number,max:number){
    this.ageFilterMin = min;
    this.ageFilterMax = max;
  }
  
  delete(id:number):void {
    this.deleteAlumno.emit(id)
  }
}
