import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainModule } from './components/main/main.module';
import { AdminPanelComponent } from './pages/admin/admin-panel/admin-panel.component';
import { StudentPanelComponent } from './pages/student/student-panel/student-panel.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidepanelComponent,
    AdminPanelComponent,
    StudentPanelComponent,
    
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
