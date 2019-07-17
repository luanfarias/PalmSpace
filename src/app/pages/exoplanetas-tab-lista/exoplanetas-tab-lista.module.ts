import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExoplanetasTabListaPage } from './exoplanetas-tab-lista.page';
import { ExoplanetasListaFiltroPage } from '../exoplanetas-lista-filtro/exoplanetas-lista-filtro.page';
import { ExoplanetasListagemPage } from '../exoplanetas-listagem/exoplanetas-listagem.page';

const routes: Routes = [
  {
    path: '',
    component: ExoplanetasTabListaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExoplanetasTabListaPage, ExoplanetasListaFiltroPage, ExoplanetasListagemPage],
  entryComponents: [ExoplanetasListaFiltroPage, ExoplanetasListagemPage],
})
export class ExoplanetasTabListaPageModule {}
