import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgendarComponent } from './components/agendar/agendar.component';
import { AgendasComponent } from './components/agendas/agendas.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    InicioComponent,
    AgendarComponent,
    AgendasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
