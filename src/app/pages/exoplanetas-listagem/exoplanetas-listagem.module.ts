import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExoplanetasListagemPage } from './exoplanetas-listagem.page';

const routes: Routes = [
  {
    path: '',
    component: ExoplanetasListagemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExoplanetasListagemPage]
})
export class ExoplanetasListagemPageModule {}
