import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { CallspopPage } from '../callspop/callspop';

/**
 * Generated class for the CallsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calls',
  templateUrl: 'calls.html',
})
export class CallsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public pop: PopoverController) {
  }

  presentPopover(myEvent) {
    let popover = this.pop.create(CallspopPage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallsPage');
  }

}
