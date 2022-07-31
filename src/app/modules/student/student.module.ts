import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StudentPanelComponent } from '../../pages/student-panel/student-panel.component';
import { AgGridModule, AgGridAngular } from 'ag-grid-angular';
@NgModule({
  declarations: [StudentPanelComponent, AgGridAngular],
  imports: [BrowserModule, HttpClientModule, AgGridModule],
  providers: [],
  bootstrap: [StudentPanelComponent],
})
export class StudentModule {}
