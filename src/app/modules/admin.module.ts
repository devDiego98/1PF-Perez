import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { NuevoAlumnoFormComponent } from '../components/nuevo-alumno-form/nuevo-alumno-form.component';
import { ListaDeAlumnosComponent } from '../components/lista-de-alumnos/lista-de-alumnos.component';
import { FontSizeDirective } from '../directivas/font-size.directive';
import { EditarAlumnoFormComponent } from '../components/editar-alumno-form/editar-alumno-form.component';
import { TitleCasePipe } from '../pipes/title-case.pipe';
import { AdminPanelComponent } from '../pages/admin-panel/admin-panel.component';
import { AgGridModule } from 'ag-grid-angular';
import { DeleteStudentButtonComponent } from '../components/delete-student-button/delete-student-button.component';
import { EditarAlumnoModalComponent } from '../components/editar-alumno-modal/editar-alumno-modal.component';


@NgModule({
  declarations: [ListaDeAlumnosComponent,
    NuevoAlumnoFormComponent,TitleCasePipe,FontSizeDirective,EditarAlumnoFormComponent,AdminPanelComponent,DeleteStudentButtonComponent,EditarAlumnoModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule
  ],
  exports:[TitleCasePipe,NuevoAlumnoFormComponent,ListaDeAlumnosComponent,ReactiveFormsModule,FontSizeDirective,EditarAlumnoFormComponent,AdminPanelComponent,DeleteStudentButtonComponent]
})
export class AdminModule { }
