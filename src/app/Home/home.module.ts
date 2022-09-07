import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgendarComponent } from './components/agendar/agendar.component';
import { AgendasComponent } from './components/agendas/agendas.component';
import { MainComponent } from './main/main.component';
import { AgendarFormularioComponent } from './components/agendar-formulario/agendar-formulario.component';
import { SharedModule } from '../shared/shared.module';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    InicioComponent,
    AgendarComponent,
    AgendasComponent,
    AgendarFormularioComponent,
  ],
  exports: [
    MatInputModule,
    MatSelectModule
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ]
})
export class HomeModule { }
