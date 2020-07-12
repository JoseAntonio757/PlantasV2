import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { PlantaAComponent } from './pages/planta-a/planta-a.component';
import { PlantaBComponent } from './pages/planta-b/planta-b.component';
import { ContPlantaAComponent } from './pages/cont-planta-a/cont-planta-a.component';

const app_routes: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'PlantaA', component: PlantaAComponent },
  { path: 'PlantaB', component: PlantaBComponent},
  { path: 'ContPlantaA', component: ContPlantaAComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
