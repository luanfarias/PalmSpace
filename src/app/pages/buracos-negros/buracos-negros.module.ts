import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BuracosNegrosPage } from './buracos-negros.page';

const routes: Routes = [
  {
    path: '',
    component: BuracosNegrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BuracosNegrosPage]
})
export class BuracosNegrosPageModule {}
