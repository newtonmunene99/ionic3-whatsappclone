import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatpopPage } from './chatpop';

@NgModule({
  declarations: [
    ChatpopPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatpopPage),
  ],
})
export class ChatpopPageModule {}
