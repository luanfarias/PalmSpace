import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuracoNegroEstruturaListaPage } from './buraco-negro-estrutura-lista.page';

const routes: Routes = [
  {
    path: '',
    component: BuracoNegroEstruturaListaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuracoNegroEstruturaListaPage]
})
export class BuracoNegroEstruturaListaPageModule {}
