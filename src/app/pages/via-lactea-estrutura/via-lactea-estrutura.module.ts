import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViaLacteaEstruturaPage } from './via-lactea-estrutura.page';

const routes: Routes = [
  {
    path: '',
    component: ViaLacteaEstruturaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViaLacteaEstruturaPage]
})
export class ViaLacteaEstruturaPageModule {}
