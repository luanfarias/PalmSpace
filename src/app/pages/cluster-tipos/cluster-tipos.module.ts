import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClusterTiposPage } from './cluster-tipos.page';

const routes: Routes = [
  {
    path: '',
    component: ClusterTiposPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClusterTiposPage]
})
export class ClusterTiposPageModule {}
