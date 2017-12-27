import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { HomepopPage } from '../homepop/homepop';
import { MyApp } from "../../app/app.component";
import { getComponent } from 'ionic-angular/navigation/nav-util';
import { App } from 'ionic-angular/components/app/app';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public pop: PopoverController, private app: App) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

}
