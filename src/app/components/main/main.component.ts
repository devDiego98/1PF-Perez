import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/interfaces/alumnos';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{
  alumnos: Alumno[] = [
    { nombre: 'diego', edad: 19 },
    { nombre: 'ale', edad: 16 },
    { nombre: 'gabriel', edad: 25 },
  ];
  constructor() { }


  
  newAlumno(alumno:Alumno){
    this.alumnos.push(alumno)
  }
  acceptData(age:number){
    if(age >=18){
      alert('Esta persona es mayor de edad')
    }else {
      alert('Esta persona es menor de edad')
    }
    
    
  }
}
