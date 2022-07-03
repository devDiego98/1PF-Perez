import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeAlumnosComponent } from '../lista-de-alumnos/lista-de-alumnos.component';
import { NuevoAlumnoFormComponent } from '../nuevo-alumno-form/nuevo-alumno-form.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [ListaDeAlumnosComponent,NuevoAlumnoFormComponent,MainComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports:[NuevoAlumnoFormComponent,ListaDeAlumnosComponent,ReactiveFormsModule,MainComponent]
})
export class MainModule { }
