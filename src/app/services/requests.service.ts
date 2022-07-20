import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs'
import { debounceTime, map, Observable } from 'rxjs';
import { Alumno } from '../interfaces/alumnos';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http:HttpClient) { }

  getStudents():Observable<Alumno[]> {
    return this.http.get<Alumno[]>('http://localhost:3000/students').pipe(map((res)=>{
     return res
    }))
  }
  deleteStudent(id:number){
    return this.http.delete(`http://localhost:3000/students/${id}`)
  }

   newStudent(alumno:Alumno){
    return this.http.post(`http://localhost:3000/students`,alumno)
  }

}
