import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomepopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homepop',
  templateUrl: 'homepop.html',
})
export class HomepopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  newGroup() {

  }

  newBroadcast() {

  }

  wappWeb() {

  }

  starredMsgs() {
    
  }

  settings() {
    this.navCtrl.push('SettingsPage');
  }

}
