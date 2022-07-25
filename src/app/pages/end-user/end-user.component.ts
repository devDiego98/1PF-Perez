import { Component, OnInit } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { Alumno } from 'src/app/interfaces/alumnos';
import { RequestsService } from 'src/app/services/requests.service';


@Component({
  selector: 'app-end-user',
  templateUrl: './end-user.component.html',
  styleUrls: ['./end-user.component.scss']
})
export class EndUserComponent implements OnInit{

  alumnos$:Observable<Alumno[]>=of([]);

  constructor(private requests:RequestsService) { 
  }
  
  ngOnInit(): void {
     this.alumnos$ = this.requests.getStudents()
   }
   
  }
