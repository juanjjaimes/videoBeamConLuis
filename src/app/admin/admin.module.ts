import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { AdministrarUsersComponent } from './components/administrar-users/administrar-users.component';
import { AdministrarVideoBeamsComponent } from './components/administrar-video-beams/administrar-video-beams.component';


@NgModule({
  declarations: [
    NavComponent,
    MainComponent,
    AdministrarUsersComponent,
    AdministrarVideoBeamsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
