import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GalaxiasTipoAnasPage } from './galaxias-tipo-anas.page';

const routes: Routes = [
  {
    path: '',
    component: GalaxiasTipoAnasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GalaxiasTipoAnasPage]
})
export class GalaxiasTipoAnasPageModule {}
