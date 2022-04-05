import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Autentification/components/login/login.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./Autentification/autentification.module').then(m => m.AutentificationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
