import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuracoNegroEstruturaPage } from './buraco-negro-estrutura.page';
import { BuracoNegroEstruturaListaPage } from './../buraco-negro-estrutura-lista/buraco-negro-estrutura-lista.page';

const routes: Routes = [
  {
    path: '',
    component: BuracoNegroEstruturaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuracoNegroEstruturaPage, BuracoNegroEstruturaListaPage],
  entryComponents:[BuracoNegroEstruturaListaPage],
})
export class BuracoNegroEstruturaPageModule {}
