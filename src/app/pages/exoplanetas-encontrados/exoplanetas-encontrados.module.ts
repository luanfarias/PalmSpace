import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExoplanetasEncontradosPage } from './exoplanetas-encontrados.page';

const routes: Routes = [
  {
    path: '',
    component: ExoplanetasEncontradosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExoplanetasEncontradosPage]
})
export class ExoplanetasEncontradosPageModule {}
