import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ExoplanetasListaFiltroPage } from '../exoplanetas-lista-filtro/exoplanetas-lista-filtro.page';
import { ExoplanetasListagemPage } from '../exoplanetas-listagem/exoplanetas-listagem.page';

@Component({
  selector: 'app-exoplanetas-tab-lista',
  templateUrl: './exoplanetas-tab-lista.page.html',
  styleUrls: ['./exoplanetas-tab-lista.page.scss'],

})
export class ExoplanetasTabListaPage implements OnInit {

  //Lista dos exoplanetas
  public listaExoplanetas = new Array<any>();

  opcaoMethod = "default";
  opcaoFacility = "default";

  //usado no componente de loading da página
  loading: any;


  constructor(
    private modalCtrl : ModalController,
  ) { }

  ngOnInit() {
  }

  async abrirListagem(){
    let modal = await this.modalCtrl.create({
      component: ExoplanetasListagemPage,
      componentProps: {dataOpMethod: this.opcaoMethod, dataOpFacility: this.opcaoFacility}
    });
    return await modal.present();
  }

  async abrirFiltro(){
    let modal = await this.modalCtrl.create({
      component: ExoplanetasListaFiltroPage,
    });

    modal.onDidDismiss().then((info)=>{
      const temp = info.data;
      this.opcaoFacility = temp[0].facility;
      this.opcaoMethod = temp[0].method;
    })

    return await modal.present();
  }
}
