import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatsettingsPage } from './chatsettings';

@NgModule({
  declarations: [
    ChatsettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatsettingsPage),
  ],
})
export class ChatsettingsPageModule {}
