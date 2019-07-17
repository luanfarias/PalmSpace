import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuracoNegroFormacaoPage } from './buraco-negro-formacao.page';

const routes: Routes = [
  {
    path: '',
    component: BuracoNegroFormacaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuracoNegroFormacaoPage]
})
export class BuracoNegroFormacaoPageModule {}
