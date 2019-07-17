import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExoplanetasListaFiltroPage } from './exoplanetas-lista-filtro.page';

const routes: Routes = [
  {
    path: '',
    component: ExoplanetasListaFiltroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExoplanetasListaFiltroPage]
})
export class ExoplanetasListaFiltroPageModule {}
