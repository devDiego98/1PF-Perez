import { Component } from '@angular/core';
import {ICellRendererAngularComp } from 'ag-grid-angular'
import { ICellRendererParams } from 'ag-grid-community';
// app/button-cell-renderer.component.ts

@Component({
  selector: 'delete-student-cell-renderer',
  template: `
    <button  class='btn btn-danger' (click)="btnClickedHandler($event)">Click me!</button>
  `,
})
export class DeleteStudentButtonComponent implements ICellRendererAngularComp {
  private params: any;
refresh(params: ICellRendererParams<any, any>): boolean {
    return true;
}
  agInit(params: any): void {
    this.params = params;
  }

  btnClickedHandler(test:any) {
    console.log(this.params.data)
    this.params.clicked(this.params.data.id);
  }
}
