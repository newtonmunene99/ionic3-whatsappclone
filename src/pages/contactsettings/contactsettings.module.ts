import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsettingsPage } from './contactsettings';

@NgModule({
  declarations: [
    ContactsettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactsettingsPage),
  ],
})
export class ContactsettingsPageModule {}
