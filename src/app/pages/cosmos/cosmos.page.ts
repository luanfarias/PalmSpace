import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cosmos',
  templateUrl: './cosmos.page.html',
  styleUrls: ['./cosmos.page.scss'],
})
export class CosmosPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  abrirPagina(nomeDaPagina : string){
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
