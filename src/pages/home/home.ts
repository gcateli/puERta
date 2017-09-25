import { Component } from '@angular/core';
import { ToastController, ToastOptions, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  msgOptions: ToastOptions
  constructor(public msg: ToastController, public navCtrl: NavController) {
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

}
