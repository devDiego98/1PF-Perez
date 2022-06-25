import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumnos';
@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.scss']
})
export class ListaDeAlumnosComponent implements OnInit {
   lista:Alumno[] = [{nombre:'diego',edad:19},{nombre:'ale',edad:16},{nombre:'gabriel',edad:25}];
  constructor() {
  
   }

  ngOnInit(): void {
  }

}
