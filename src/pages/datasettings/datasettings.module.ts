import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatasettingsPage } from './datasettings';

@NgModule({
  declarations: [
    DatasettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(DatasettingsPage),
  ],
})
export class DatasettingsPageModule {}
