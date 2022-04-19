import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  {
    path: 'test',
    component: HeaderComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./Autentification/autentification.module').then(m => m.AutentificationModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
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
