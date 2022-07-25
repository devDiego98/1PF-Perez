import { Component ,ViewChild} from '@angular/core';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.scss']
})
export class StudentPanelComponent  {

 
 
 // Each Column Definition results in one Column.
 public columnDefs: ColDef[] = [
  { field: 'nombre'},
  { field: 'apellido'},
  { field: 'edad' }
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

constructor(private requests:RequestsService) {}

// Example load data from sever
onGridReady(params: GridReadyEvent) {
  this.rowData$ = this.requests.getStudents()
  this.agGrid.api.sizeColumnsToFit()
}

// Example of consuming Grid Event
onCellClicked( e: CellClickedEvent): void {
}
}

