import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeAlumnosComponent } from '../lista-de-alumnos/lista-de-alumnos.component';
import { NuevoAlumnoFormComponent } from '../nuevo-alumno-form/nuevo-alumno-form.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { TitleCasePipe } from 'src/app/pipes/title-case.pipe';
import { FontSizeDirective } from 'src/app/directivas/font-size.directive';


@NgModule({
  declarations: [ListaDeAlumnosComponent,
    NuevoAlumnoFormComponent,MainComponent,TitleCasePipe,FontSizeDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports:[TitleCasePipe,NuevoAlumnoFormComponent,ListaDeAlumnosComponent,ReactiveFormsModule,MainComponent,FontSizeDirective]
})
export class MainModule { }
