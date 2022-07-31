import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EndUserModule } from './modules/end-user.module';
import { AdminModule } from './modules/admin.module';
import { StudentModule } from './modules/student.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidepanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    EndUserModule,
    AdminModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
