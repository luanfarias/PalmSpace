import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ExplorarCosmosMostrarPage } from '../explorar-cosmos-mostrar/explorar-cosmos-mostrar.page';

@Component({
  selector: 'app-explorar-cosmos',
  templateUrl: './explorar-cosmos.page.html',
  styleUrls: ['./explorar-cosmos.page.scss'],
})
export class ExplorarCosmosPage implements OnInit {

  public apod = new Array<any>();
  myDate = new Date().toDateString();

  dataService;

  dataBrPadrao;

  dataAtual;


  constructor(
    private modalCtrl : ModalController, 
    private alertCtrl : AlertController,
    ) { }

    dataChanged(date){
    this.dataService = (this.dataParaString());
    this.padronizarDataBr();
  }

  pegarDataAtual(){
    this.dataAtual = new Date();
    let dia : string, mes : string, ano : string;

    dia = String(this.dataAtual.getDate()).padStart(2, '0');
    mes = String(this.dataAtual.getMonth() + 1).padStart(2, '0');
    ano = String(this.dataAtual.getFullYear());

    this.dataAtual = dia + "/" + mes + "/" + ano;
  }

  dataEscolhidaMaior(){
    this.pegarDataAtual();
    if(this.dataBrPadrao > this.dataAtual){
      return true;
    }
  }


  padronizarDataBr(){
    let dataEuaParaBr = this.dataService.split("-");
    this.dataBrPadrao = dataEuaParaBr[2] + "/" + dataEuaParaBr[1] + "/" + dataEuaParaBr[0];
  }

  async abrirModal(){
    if(typeof this.dataService === 'undefined'){
      this.emiteAlertaSemData();
    } else if(this.dataEscolhidaMaior()){
        this.emiteAlertaDataEscolhidaMaior()
      } else{
          let modal = await this.modalCtrl.create({
            component: ExplorarCosmosMostrarPage,
            componentProps: {
              dataService: this.dataService,
              dataPadraoBr : this.dataBrPadrao
          }
      });
      return await modal.present();
    }
    
  }

  dataParaString(){
    return this.myDate.substring(0, 10);
  }

  async emiteAlertaSemData(){
    let alerta =  await this.alertCtrl.create({
      header: "Mensagem de erro:",
      subHeader: "Data não escolhida",
      message: "Por favor, escolha uma data",
      buttons: ['Ok']
    });
    await alerta.present();
  }

  async emiteAlertaDataEscolhidaMaior(){
    let alerta =  await this.alertCtrl.create({
      header: "Mensagem de erro:",
      subHeader: "Data escolhida inválida",
      message: "Não é permitido escolher uma data maior que a data atual",
      buttons: ['Ok']
    });
    await alerta.present();
  }
  

  ngOnInit() {
  }

}
