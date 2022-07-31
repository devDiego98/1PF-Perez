import { Component, EventEmitter, Input, OnInit, Output,ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestsService } from 'src/app/services/requests.service';
import { Alumno } from 'src/app/interfaces/alumnos';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { DeleteStudentButtonComponent } from '../delete-student-button/delete-student-button.component';
@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.component.html',
  styleUrls: ['./lista-de-alumnos.component.scss'],
})
export class ListaDeAlumnosComponent implements OnInit {
 
 // Each Column Definition results in one Column.
 public columnDefs: ColDef[] = [
   {field:'id',onCellClicked: this.onCellClicked.bind(this)},
  { field: 'nombre',onCellClicked: this.onCellClicked.bind(this)},
  { field: 'apellido',onCellClicked: this.onCellClicked.bind(this)},
  { field: 'edad' ,onCellClicked: this.onCellClicked.bind(this)},
  {
    field: 'Delete',
    cellRenderer: DeleteStudentButtonComponent,
    cellRendererParams: {
      clicked: (field: any) => {
        this.delete(field)

      }
    },
  }
];

// DefaultColDef sets props common to all Columns
public defaultColDef: ColDef = {
  sortable: true,
  filter: true,
};
// Data that gets displayed in the grid
public rowData$!: Observable<any[]>;


// For accessing the Grid's API
@ViewChild(AgGridAngular) agGrid!: AgGridAngular;



  @Input() listaDeAlumnos$:Observable<Alumno[]>= of([]);
  @Output() onClickAlumno = new EventEmitter<Alumno>();
  @Output() deleteAlumno = new EventEmitter<number>();

  constructor(private requests:RequestsService) {}

  ngOnInit(): void {
  
  }
  editAlumno(alumno:Alumno){
    this.onClickAlumno.emit(alumno)
    
  }
  delete(id:number):void {
    this.deleteAlumno.emit(id)
  }

  //AG GRID FUNCTIONS
// Example load data from sever
onGridReady(params: GridReadyEvent) {
  this.rowData$ = this.listaDeAlumnos$
  this.agGrid.api.sizeColumnsToFit()
}

// Example of consuming Grid Event
openModal( e: CellClickedEvent): void {
  console.log('cellClicked', e);
  this.onClickAlumno.emit(e.data)
}
onCellClicked(e:any){
  this.openModal(e)
}
}
