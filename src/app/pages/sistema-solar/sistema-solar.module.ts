import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SistemaSolarPage } from './sistema-solar.page';

const routes: Routes = [
  {
    path: '',
    component: SistemaSolarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SistemaSolarPage]
})
export class SistemaSolarPageModule {}
