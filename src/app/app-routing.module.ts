import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndUserComponent } from './pages/end-user/end-user.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { StudentPanelComponent } from './pages/student-panel/student-panel.component';

const routes: Routes = [
  { path: '', component: EndUserComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'student-panel', component: StudentPanelComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
