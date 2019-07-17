import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GalaxiasTipoElipticasPage } from './galaxias-tipo-elipticas.page';

const routes: Routes = [
  {
    path: '',
    component: GalaxiasTipoElipticasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GalaxiasTipoElipticasPage]
})
export class GalaxiasTipoElipticasPageModule {}
