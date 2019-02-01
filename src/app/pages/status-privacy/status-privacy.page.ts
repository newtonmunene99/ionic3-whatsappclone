import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-status-privacy",
  templateUrl: "./status-privacy.page.html",
  styleUrls: ["./status-privacy.page.scss"]
})
export class StatusPrivacyPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  contactsExcept() {
    this.navCtrl.navigateForward(
      "/settings/account/privacy/status-privacy/hide-status-from"
    );
  }

  contactsChoosen() {
    this.navCtrl.navigateForward(
      "/settings/account/privacy/status-privacy/share-status-with"
    );
  }
}
