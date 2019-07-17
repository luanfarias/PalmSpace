import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GalaxiasTipoEspiraisPage } from './galaxias-tipo-espirais.page';

const routes: Routes = [
  {
    path: '',
    component: GalaxiasTipoEspiraisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GalaxiasTipoEspiraisPage]
})
export class GalaxiasTipoEspiraisPageModule {}
