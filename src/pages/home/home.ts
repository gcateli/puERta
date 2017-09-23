import { Component } from '@angular/core';
import { ToastController, ToastOptions, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toastOptions: ToastOptions
  constructor(public toast: ToastController, public navCtrl: NavController) {
    this.toastOptions = {
      message: 'Porta aberta',
      duration: 3000,
      position: 'bottom'
    } 
  }
  
  abrePorta(){
    console.log('Porta Aberta');	
    this.toast.create(this.toastOptions).present();
  }

}
