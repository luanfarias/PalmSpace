import { NavParams, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buraco-negro-estrutura-lista',
  templateUrl: './buraco-negro-estrutura-lista.page.html',
  styleUrls: ['./buraco-negro-estrutura-lista.page.scss'],
})
export class BuracoNegroEstruturaListaPage implements OnInit {

  selecionado : any;

  constructor(private NavParam : NavParams, private modalCtrl : ModalController) { }

  ngOnInit() {
    this.selecionado = this.NavParam.get('sessaoSelecionada');
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
