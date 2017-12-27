import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { StatuspopPage } from '../statuspop/statuspop';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public pop: PopoverController) {
  }

  presentPopover(myEvent) {
    let popover = this.pop.create(StatuspopPage);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

}
