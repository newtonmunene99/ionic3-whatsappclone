import { Component, OnInit } from "@angular/core";
import { ProfileModalComponent } from "src/app/components/profile-modal/profile-modal.component";
import { PopoverController } from "@ionic/angular";
import { ContactsPopoverComponent } from "src/app/components/contacts-popover/contacts-popover.component";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.page.html",
  styleUrls: ["./contacts.page.scss"]
})
export class ContactsPage implements OnInit {
  contacts = Array(30).fill({
    name: "Finn",
    status: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    profilePicture: "../../../assets/images/one.png"
  });
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  async presentOptionsPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ContactsPopoverComponent,
      event: ev,
      translucent: false
    });
    popover.onDidDismiss().then(page => {
      if (page.data) {
        console.log(page);
      }
    });
    return await popover.present();
  }

  async presentProfilePopover(user: any) {
    const popover = await this.popoverController.create({
      component: ProfileModalComponent,
      translucent: false,
      cssClass: "profile-popover",
      animated: true,
      componentProps: { user: "Finn" }
    });
    popover.onDidDismiss().then(page => {
      if (page.data) {
        console.log(page);
      }
    });
    return await popover.present();
  }
}
