import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExoplanetasPage } from './exoplanetas.page';

const routes: Routes = [
  {
    path: '',
    component: ExoplanetasPage,
    children: [
      {
        path: 'exoplanetas-tab-principal',
        loadChildren: '../exoplanetas-tab-principal/exoplanetas-tab-principal.module#ExoplanetasTabPrincipalPageModule'
      },
      {
        path: 'exoplanetas-tab-lista',
        loadChildren: '../exoplanetas-tab-lista/exoplanetas-tab-lista.module#ExoplanetasTabListaPageModule'
      },
      {
        path: '',
        redirectTo: '/exoplanetas/exoplanetas-tab-principal',
        pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExoplanetasPage]
})
export class ExoplanetasPageModule {}
