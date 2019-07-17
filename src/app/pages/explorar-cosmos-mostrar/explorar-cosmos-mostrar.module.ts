import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExplorarCosmosMostrarPage } from './explorar-cosmos-mostrar.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorarCosmosMostrarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExplorarCosmosMostrarPage]
})
export class ExplorarCosmosMostrarPageModule {}
