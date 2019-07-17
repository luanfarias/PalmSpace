import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExoplanetasFormacaoPage } from './exoplanetas-formacao.page';

const routes: Routes = [
  {
    path: '',
    component: ExoplanetasFormacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExoplanetasFormacaoPage]
})
export class ExoplanetasFormacaoPageModule {}
