import { Component, OnInit } from "@angular/core";
import { PopoverController, ModalController } from "@ionic/angular";
import { ChatsPopoverComponent } from "../../components/chats-popover/chats-popover.component";
import { ProfileModalComponent } from "src/app/components/profile-modal/profile-modal.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-chats",
  templateUrl: "./chats.page.html",
  styleUrls: ["./chats.page.scss"]
})
export class ChatsPage implements OnInit {
  chats: Array<any> = Array(10).fill({
    name: "Finn",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et facilis ad suscipit quas ducimus, quisquam numquam maiores nam magnam ratione  vel nostrum, sequi architecto accusantium.Temporibus totam perspiciatis dolorem numquam!",
    profilePicture: "../../../assets/images/one.png",
    unreadCount: 3
  });
  constructor(
    public popoverController: PopoverController,
    public modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}

  async presentOptionsPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ChatsPopoverComponent,
      event: ev,
      translucent: false
    });
    popover.onDidDismiss().then(res => {
      if (res.data) {
        console.log(res);
        this.router.navigate(["/" + res.data]);
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
      componentProps: { user: user }
    });
    popover.onDidDismiss().then(page => {
      if (page.data) {
        console.log(page);
      }
    });
    return await popover.present();
  }

  initChat() {}

  contacts() {}
  showProfile() {}
}
