import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstrelaTipoPage } from './estrela-tipo.page';
import { EstrelaTipoListaPage } from '../estrela-tipo-lista/estrela-tipo-lista.page';

const routes: Routes = [
  {
    path: '',
    component: EstrelaTipoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstrelaTipoPage, EstrelaTipoListaPage],
  entryComponents:[EstrelaTipoListaPage],
})
export class EstrelaTipoPageModule {}
