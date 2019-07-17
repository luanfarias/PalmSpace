import { BuracoNegroEstruturaListaPage } from './../buraco-negro-estrutura-lista/buraco-negro-estrutura-lista.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-buraco-negro-estrutura',
  templateUrl: './buraco-negro-estrutura.page.html',
  styleUrls: ['./buraco-negro-estrutura.page.scss'],
})
export class BuracoNegroEstruturaPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  async abrirModal(sessao){
    let modal = await this.modalCtrl.create({
      component : BuracoNegroEstruturaListaPage,
      componentProps : {
        sessaoSelecionada : sessao
      }
    });
    return await modal.present();
  }

}