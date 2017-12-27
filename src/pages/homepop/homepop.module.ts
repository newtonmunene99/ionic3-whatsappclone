import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomepopPage } from './homepop';

@NgModule({
  declarations: [
    HomepopPage,
  ],
  imports: [
    IonicPageModule.forChild(HomepopPage),
  ],
})
export class HomepopPageModule {}
