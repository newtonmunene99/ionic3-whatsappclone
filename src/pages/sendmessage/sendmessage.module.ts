import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendmessagePage } from './sendmessage';

@NgModule({
  declarations: [
    SendmessagePage,
  ],
  imports: [
    IonicPageModule.forChild(SendmessagePage),
  ],
})
export class SendmessagePageModule {}
