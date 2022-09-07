import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificationRoutingModule } from './autentification-routing.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LayoutAuthComponent } from './components/layout-auth/layout-auth.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LayoutAuthComponent,
  ],
  imports: [
    CommonModule,
    AutentificationRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AutentificationModule { }
