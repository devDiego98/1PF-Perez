import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, of, switchMap } from 'rxjs';

import { Alumno } from 'src/app/interfaces/alumnos';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  @ViewChild('content') content: any;
  @ViewChild('editarAlumnoModal') editarAlumnoModal: any;
  closeResult = '';
  showModal: boolean = false;
  infoAlumno: Alumno = { nombre: '', apellido: '', edad: 0, id: 0 };
  idCount: number = 0;

  alumnos$: Observable<Alumno[]> = of([]);
  refreshStudents$ = new BehaviorSubject<boolean>(true);

  constructor(
    private requests: RequestsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.alumnos$ = this.refreshStudents$.pipe(
      switchMap((_) => this.requests.getStudents())
    );
  }

  newAlumno(alumno: Alumno) {
    this.requests.newStudent(alumno).subscribe(() => {
      console.log('New Student created');
      this.refreshStudents$.next(!this.refreshStudents$);
    });
  }

  modificarAlumno(alumno: Alumno) {
    this.requests.updateStudent(alumno).subscribe((res) => {
      this.refreshStudents$.next(!this.refreshStudents$);
      this.modalService.dismissAll();
    });
  }

  deleteAlumno(id: number) {
    this.requests.deleteStudent(id).subscribe((res) => {
      this.refreshStudents$.next(!this.refreshStudents$);
      this.modalService.dismissAll();
    });
  }
  setearAlumnoAModificar(alumno: Alumno) {
    console.log(alumno);
    this.infoAlumno = alumno;
    this.open();
  }
  open() {
    this.modalService
      .open(this.content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
