import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatDatepickerModule
  ]
})
export class SharedModule { }
