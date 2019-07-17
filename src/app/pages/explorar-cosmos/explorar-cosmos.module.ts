import { ExplorarCosmosMostrarPage } from './../explorar-cosmos-mostrar/explorar-cosmos-mostrar.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExplorarCosmosPage } from './explorar-cosmos.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorarCosmosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExplorarCosmosPage, ExplorarCosmosMostrarPage],
  entryComponents : [ExplorarCosmosMostrarPage]
})
export class ExplorarCosmosPageModule {}
