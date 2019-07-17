import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SistemaSolarPlanetasPage } from './sistema-solar-planetas.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaSolarPlanetasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SistemaSolarPlanetasPage]
})
export class SistemaSolarPlanetasPageModule {}
