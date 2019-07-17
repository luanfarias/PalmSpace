import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-exoplanetas-lista-filtro',
  templateUrl: './exoplanetas-lista-filtro.page.html',
  styleUrls: ['./exoplanetas-lista-filtro.page.scss'],
})
export class ExoplanetasListaFiltroPage implements OnInit {

  constructor(private modalCtrl : ModalController, private alertCtrl : AlertController) { }

  opKepler = false;;
  opHubble = false;;
 

  opFacility;


  ngOnInit() {
  }

  ionViewDidEnter(){
  }

  async emiteAlerta(){
    let alerta =  await this.alertCtrl.create({
      header: "Opção inválida:",
      subHeader: "Opções redefinidas.",
      message: "Por favor, escolha somente uma opção",
      buttons: ['Ok']
    });
    await alerta.present();
  }


  verificarOpcoes(){
    if(this.opKepler === true && this.opHubble === true ){
      this.emiteAlerta();
      this.opFacility = "default";
    }
    else{
      if(this.opHubble == true && this.opKepler == false){
        this.opFacility = "hubble"
      }
      if(this.opHubble == false && this.opKepler == true){
        this.opFacility = "kepler"
      }
      if(this.opHubble == false && this.opKepler == false){
        this.opFacility = "default";
      }
    }
  }


  async closeFiltro(){
    this.verificarOpcoes();
    console.log(this.opFacility);
    let resposta = Array();
    resposta = [
      {"facility": this.opFacility
      }
    ]
    this.modalCtrl.dismiss(resposta);
  }
}
