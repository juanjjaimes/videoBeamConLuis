import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarUsersComponent } from './components/administrar-users/administrar-users.component';
import { AdministrarVideoBeamsComponent } from './components/administrar-video-beams/administrar-video-beams.component';
import { NavComponent } from './components/nav/nav.component';

const routes: Routes = [
  // { path: '', redirectTo: 'gestionar-user', pathMatch: 'full' },
  { path: '', component: NavComponent },
  { path: 'gestionar-user', component: AdministrarUsersComponent },
  { path: 'gestionar-vb', component: AdministrarVideoBeamsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
