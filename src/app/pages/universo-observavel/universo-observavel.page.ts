import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-universo-observavel',
  templateUrl: './universo-observavel.page.html',
  styleUrls: ['./universo-observavel.page.scss'],
})
export class UniversoObservavelPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  abrirPagina(nomeDaPagina : string){
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
