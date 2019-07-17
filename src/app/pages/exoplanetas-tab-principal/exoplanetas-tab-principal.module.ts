import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExoplanetasTabPrincipalPage } from './exoplanetas-tab-principal.page';

const routes: Routes = [
  {
    path: '',
    component: ExoplanetasTabPrincipalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExoplanetasTabPrincipalPage]
})
export class ExoplanetasTabPrincipalPageModule {}
