import { Component } from '@angular/core';
import { ToastController, ToastOptions, IonicPage, NavController, NavParams } from 'ionic-angular';

declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-imei',
  templateUrl: 'imei.html',
})
export class ImeiPage {

  imei: string = '';
  msgOptions: ToastOptions

  constructor(private msg: ToastController,public navCtrl: NavController, public navParams: NavParams) {
    this.msgOptions = {
      message: '',
      duration: 3000,
      position: 'bottom'
    }     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImeiPage');
  }

  obterIMEI(){
    var permissions = cordova.plugins.permissions;
    var imei = cordova.plugins.imei;
    permissions.requestPermission(permissions.READ_PHONE_STATE, success, error);
    function error() {
      this.msgOptions.message = 'Não há permissões para acessar o IMEI!';
      this.msg.create(this.msgOptions).present();      
    }
    function success(status) {
        imei.get(
            function (imei) {
              console.log('worked');
              this.imei = imei;
            },
            function () {
              console.log('error');
              this.msgOptions.message = 'Erro ao acessar o IMEI!';
              this.msg.create(this.msgOptions).present();                            
            }
        );
    }  
  }
}
