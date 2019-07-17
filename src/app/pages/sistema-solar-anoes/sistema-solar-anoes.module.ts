import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SistemaSolarAnoesPage } from './sistema-solar-anoes.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaSolarAnoesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SistemaSolarAnoesPage]
})
export class SistemaSolarAnoesPageModule {}
