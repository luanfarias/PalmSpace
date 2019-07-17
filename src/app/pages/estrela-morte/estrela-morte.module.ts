import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EstrelaMortePage } from './estrela-morte.page';

const routes: Routes = [
  {
    path: '',
    component: EstrelaMortePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EstrelaMortePage]
})
export class EstrelaMortePageModule {}
