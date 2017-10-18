import { Component } from '@angular/core';
import { ToastController, ToastOptions, NavController, ModalController } from 'ionic-angular';
import {ImeiPage} from '../imei/imei';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  imeiPage = ImeiPage;
  msgOptions: ToastOptions
  
  constructor(private msg: ToastController, private navCtrl: NavController, private modal: ModalController) {
    this.msgOptions = {
      message: 'Porta aberta',
      duration: 3000,
      position: 'bottom'
    } 
  }
  
  abrePorta(){
    console.log('Porta Aberta');
    this.msg.create(this.msgOptions).present();
  }

  mostraIMEI(){
    const paginaModal = this.modal.create('ImeiPage');
    paginaModal.present();
  }
  
}
