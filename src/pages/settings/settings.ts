import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  myProfile() {
    this.navCtrl.push('MyprofilePage');
  }

  account() {
    this.navCtrl.push('AccountPage');
  }

  chatSettings() {
    this.navCtrl.push('ChatsettingsPage');
  }

  notifSettings() {
    this.navCtrl.push('NotifsettingsPage');
  }

  dataSettings() {
    this.navCtrl.push('DatasettingsPage');
  }

  contactSettings() {
    this.navCtrl.push('ContactsettingsPage');
  }

  help() {
    this.navCtrl.push('HelpPage');
  }

}
