import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AdminPanelComponent } from './pages/admin/admin-panel/admin-panel.component';
import { StudentPanelComponent } from './pages/student/student-panel/student-panel.component';

const routes: Routes = [
  // { path: '/', component: AppComponent },
  // { path: '/admin-panel', component: AdminPanelComponent },
  // { path: '/student-panel', component: StudentPanelComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
