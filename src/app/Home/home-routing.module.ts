import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AgendarComponent } from './components/agendar/agendar.component';

const routes: Routes = [
  { 
    path: '',
    component: MainComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'agendar', component: AgendarComponent },
      { path: '**', redirectTo: 'inicio' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
