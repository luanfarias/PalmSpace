import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-estrela-tipo-lista',
  templateUrl: './estrela-tipo-lista.page.html',
  styleUrls: ['./estrela-tipo-lista.page.scss'],
})
export class EstrelaTipoListaPage implements OnInit {

  tipoSelecionado : any;

  constructor(private navParam : NavParams, private modalCtrl : ModalController) { }

  ngOnInit() {
    this.tipoSelecionado = this.navParam.get('estrelaSelecionada');
  }

  close(){
    this.modalCtrl.dismiss();
  }

}
