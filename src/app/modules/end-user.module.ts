import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndUserComponent } from '../pages/end-user/end-user.component';

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    EndUserComponent],
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  exports:[EndUserComponent]
})
export class EndUserModule { }
