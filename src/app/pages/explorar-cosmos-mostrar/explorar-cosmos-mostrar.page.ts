import { CosmosPage } from './../cosmos/cosmos.page';
import { NavParams, ModalController, LoadingController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/service/nasa.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-explorar-cosmos-mostrar',
  templateUrl: './explorar-cosmos-mostrar.page.html',
  styleUrls: ['./explorar-cosmos-mostrar.page.scss'],
})
export class ExplorarCosmosMostrarPage implements OnInit {

  constructor(private NavParam : NavParams, 
    private servicoNasa : NasaService, 
    private modalCtrl : ModalController,
    private loadingCtrl : LoadingController,
    private dom : DomSanitizer,
    private navCrtl : NavController
    ) { }

  public apod = new Array<any>();
  
  dataService = this.NavParam.get('dataService');

  dataPadraoBr = this.NavParam.get('dataPadraoBr');

  loading : any;

  midiaVideo : boolean ;

  midiaImagem : boolean;

  video:any;


  ngOnInit() {
  }

  ionViewDidEnter(){
    this.carregarDados();
  }

  sanitize(video){
    return this.dom.bypassSecurityTrustResourceUrl(video);
  }

  carregarDados(){
    this.loading = this.mostrarTelaDeloading();
    this.servicoNasa.obterApod(this.dataService).subscribe(
      data => {
        const response = (data as any);
        this.apod = this.apod.concat(response);
        this.loading.dismiss();

        this.video = this.apod[0].url;
        this.dom.bypassSecurityTrustResourceUrl(this.video);

      }, error => {
        console.log(error);
        this.loading.dismiss();
      }
    )
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  async mostrarTelaDeloading(){
    this.loading = await this.loadingCtrl.create({
      message: 'Carregando dados...',
    });
    return await this.loading.present();
  }
}