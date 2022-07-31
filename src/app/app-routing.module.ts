import { RegisterComponent } from './modules/auth/register/register.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { StudentPanelComponent } from './pages/student-panel/student-panel.component';

const routes: Routes = [
  { path: '', component: StudentPanelComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'students', component: StudentPanelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
