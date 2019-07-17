import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViaLacteaMidiaPage } from './via-lactea-midia.page';

const routes: Routes = [
  {
    path: '',
    component: ViaLacteaMidiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViaLacteaMidiaPage]
})
export class ViaLacteaMidiaPageModule {}
