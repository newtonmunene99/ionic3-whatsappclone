import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { ChatpopPage } from '../chatpop/chatpop';

/**
 * Generated class for the SendmessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sendmessage',
  templateUrl: 'sendmessage.html',
})
export class SendmessagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public pop: PopoverController) {
  }

  presentPopover(myEvent) {
    let popover = this.pop.create(ChatpopPage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendmessagePage');
  }

}
