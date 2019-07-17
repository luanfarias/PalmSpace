import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UniversoObservavelPage } from './universo-observavel.page';

const routes: Routes = [
  {
    path: '',
    component: UniversoObservavelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UniversoObservavelPage]
})
export class UniversoObservavelPageModule {}
