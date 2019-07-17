import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuracoNegroSingularidadePage } from './buraco-negro-singularidade.page';

const routes: Routes = [
  {
    path: '',
    component: BuracoNegroSingularidadePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuracoNegroSingularidadePage]
})
export class BuracoNegroSingularidadePageModule {}
