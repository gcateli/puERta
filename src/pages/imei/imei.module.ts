import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImeiPage } from './imei';

@NgModule({
  declarations: [
    ImeiPage,
  ],
  imports: [
    IonicPageModule.forChild(ImeiPage),
  ],
})
export class ImeiPageModule {}
