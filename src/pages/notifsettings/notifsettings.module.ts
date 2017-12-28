import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotifsettingsPage } from './notifsettings';

@NgModule({
  declarations: [
    NotifsettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(NotifsettingsPage),
  ],
})
export class NotifsettingsPageModule {}
