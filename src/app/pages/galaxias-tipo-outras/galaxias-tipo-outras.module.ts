import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GalaxiasTipoOutrasPage } from './galaxias-tipo-outras.page';

const routes: Routes = [
  {
    path: '',
    component: GalaxiasTipoOutrasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GalaxiasTipoOutrasPage]
})
export class GalaxiasTipoOutrasPageModule {}
