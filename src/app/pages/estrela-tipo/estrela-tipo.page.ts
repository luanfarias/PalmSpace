import { EstrelaTipoListaPage } from './../estrela-tipo-lista/estrela-tipo-lista.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-estrela-tipo',
  templateUrl: './estrela-tipo.page.html',
  styleUrls: ['./estrela-tipo.page.scss'],
})
export class EstrelaTipoPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  async abrirModal(estrela){
    let modal = await this.modalCtrl.create({
      component : EstrelaTipoListaPage,
      componentProps : {
        estrelaSelecionada : estrela
      }
    });

    return await modal.present();
  }

}
