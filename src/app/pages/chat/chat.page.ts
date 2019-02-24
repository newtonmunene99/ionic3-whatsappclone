import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { ChatPopoverComponent } from "src/app/components/chat-popover/chat-popover.component";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.page.html",
  styleUrls: ["./chat.page.scss"]
})
export class ChatPage implements OnInit {
  messages: Array<any> = [
    {
      message: "Hi how are you?",
      time: "8:00 am",
      sender: "me",
      seen: true,
      recieved: true
    },
    {
      message: "Hi how are you?",
      time: "8:00 am",
      sender: "you",
      seen: true,
      recieved: true
    },
    {
      message: "Hi how are you?",
      time: "8:00 am",
      sender: "me",
      seen: true,
      recieved: true
    },
    {
      message: "Hi how are you?",
      time: "8:00 am",
      sender: "you",
      seen: true,
      recieved: true
    },
    {
      message: "Hi how are you?",
      time: "8:00 am",
      sender: "you",
      seen: true,
      recieved: true
    },
    {
      message: "Hi how are you?",
      time: "8:00 am",
      sender: "me",
      seen: true,
      recieved: true
    },
    {
      message: "Hi how are you?",
      time: "8:00 am",
      sender: "me",
      seen: false,
      recieved: false
    }
  ];
  constructor(private popoverController: PopoverController) {}

  async presentOptionsPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ChatPopoverComponent,
      event: ev,
      translucent: false
    });
    popover.onDidDismiss().then(res => {
      if (res.data) {
        console.log(res);
      }
    });
    return await popover.present();
  }

  ngOnInit() {}
}
