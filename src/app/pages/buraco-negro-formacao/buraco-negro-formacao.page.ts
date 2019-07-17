import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-buraco-negro-formacao',
  templateUrl: './buraco-negro-formacao.page.html',
  styleUrls: ['./buraco-negro-formacao.page.scss'],
})
export class BuracoNegroFormacaoPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  abrirPagina(nomeDaPagina : string){
    this.navCtrl.navigateForward(nomeDaPagina);
  }

}
