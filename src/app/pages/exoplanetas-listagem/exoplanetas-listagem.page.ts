import { ModalController, LoadingController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NasaService } from 'src/app/service/nasa.service';

@Component({
  selector: 'app-exoplanetas-listagem',
  templateUrl: './exoplanetas-listagem.page.html',
  styleUrls: ['./exoplanetas-listagem.page.scss'],
  providers: [NasaService]
})
export class ExoplanetasListagemPage implements OnInit {

   //Lista dos exoplanetas
   public listaExoplanetas = new Array<any>();

   //opcao escolhida no modal
   opFacility;
   opcaoEscolhida;
   
   //usado no componente de loading da página
   loading: any;
 
   //usado no scroll infinito
   limit = 10;

  constructor(
    private modalCtrl : ModalController, 
    private servicoNasa : NasaService, 
    private loadingCtrl : LoadingController,
    private navParam : NavParams
    ) { }
    

  ngOnInit() {
    this.opFacility = this.navParam.get('dataOpFacility');
  }

  async fecharLista(){
    await this.modalCtrl.dismiss();
  }

  ionViewWillEnter(){
    this.carregarExoplanetas();
    
  }

 verificarOpcoes(){


   if(this.opFacility == "default"){
    this.opcaoEscolhida = "default";
   }
   if(this.opFacility == "kepler"){
    this.opcaoEscolhida = "facilityKeplerMethodDefault";
   }
   
   if(this.opFacility == "hubble"){
    this.opcaoEscolhida = "facilityHubbleMethodDefault";
 }
}

async mostrarTelaDeloading(){
  this.loading = await this.loadingCtrl.create({
    message: 'Carregando dados...'
  });

  return await this.loading.present();
}

loadData(inifiniteScrollEvent : any){
  this.limit += 10;
  inifiniteScrollEvent.target.complete();
}

// Funções exoplanetas
carregarExoplanetas(){

  this.loading = this.mostrarTelaDeloading();

  this.verificarOpcoes();

  this.servicoNasa.obterExoplanetas(this.opcaoEscolhida).subscribe(
  data => {
    const response = (data as any);
    this.listaExoplanetas = this.listaExoplanetas.concat(response);
    this.loading.dismiss();
    console.log(this.listaExoplanetas);
  }, error => {
    console.log(error);
    this.loading.dismiss();
  })
}
}
