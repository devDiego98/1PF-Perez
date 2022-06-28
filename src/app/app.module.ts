import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';
import { MainComponent } from './components/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaDeAlumnosComponent } from './components/lista-de-alumnos/lista-de-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidepanelComponent,
    MainComponent,
    ListaDeAlumnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
