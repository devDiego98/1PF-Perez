import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaDeAlumnosComponent } from '../lista-de-alumnos/lista-de-alumnos.component';
import { NuevoAlumnoFormComponent } from '../nuevo-alumno-form/nuevo-alumno-form.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { TitleCasePipe } from 'src/app/pipes/title-case.pipe';
import { FontSizeDirective } from 'src/app/directivas/font-size.directive';
import { EditarAlumnoFormComponent } from '../editar-alumno-form/editar-alumno-form.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [ListaDeAlumnosComponent,
    NuevoAlumnoFormComponent,MainComponent,TitleCasePipe,FontSizeDirective,EditarAlumnoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  exports:[TitleCasePipe,NuevoAlumnoFormComponent,ListaDeAlumnosComponent,ReactiveFormsModule,MainComponent,FontSizeDirective,EditarAlumnoFormComponent]
})
export class MainModule { }
