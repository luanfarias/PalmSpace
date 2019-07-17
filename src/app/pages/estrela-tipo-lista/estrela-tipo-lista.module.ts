import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstrelaTipoListaPage } from './estrela-tipo-lista.page';

const routes: Routes = [
  {
    path: '',
    component: EstrelaTipoListaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstrelaTipoListaPage]
})
export class EstrelaTipoListaPageModule {}
