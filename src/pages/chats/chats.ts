import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { HomepopPage } from '../homepop/homepop';
import { App } from 'ionic-angular/components/app/app';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public pop: PopoverController, private app: App, private statusBar: StatusBar) {
   // this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString('#075e54');
  }

  presentPopover(myEvent) {
    let popover = this.pop.create(HomepopPage);
    popover.present({
      ev: myEvent
    });
  }

  initChat() {
    //this.navCtrl.push('SendmessagePage');
    this.app.getRootNav().push('SendmessagePage');
  }

  contacts() {
    this.app.getRootNav().push('ContactsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

  

}
