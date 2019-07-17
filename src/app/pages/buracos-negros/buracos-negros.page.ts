import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-buracos-negros',
  templateUrl: './buracos-negros.page.html',
  styleUrls: ['./buracos-negros.page.scss'],
})
export class BuracosNegrosPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  abrirPagina(nomeDaPagina : string){
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
