import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-privacy",
  templateUrl: "./privacy.page.html",
  styleUrls: ["./privacy.page.scss"]
})
export class PrivacyPage implements OnInit {
  lastSeen: String = "Everyone";
  profilePhoto: String = "Everyone";
  about: String = "Everyone";
  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  async presentAlertRadio(setting: string) {
    const alert = await this.alertController.create({
      header:
        setting === "lastseen"
          ? "Last seen"
          : setting === "profilephoto"
          ? "Profile photo"
          : "About",
      inputs: [
        {
          name: "everyone",
          type: "radio",
          label: "Everyone",
          value: "Everyone",
          checked:
            setting === "lastseen"
              ? this.lastSeen === "Everyone"
                ? true
                : false
              : setting === "profilephoto"
              ? this.profilePhoto === "Everyone"
                ? true
                : false
              : this.about === "Everyone"
              ? true
              : false
        },
        {
          name: "contacts",
          type: "radio",
          label: "My contacts",
          value: "My contacts",
          checked:
            setting === "lastseen"
              ? this.lastSeen === "My contacts"
                ? true
                : false
              : setting === "profilephoto"
              ? this.profilePhoto === "My contacts"
                ? true
                : false
              : this.about === "My contacts"
              ? true
              : false
        },
        {
          name: "nobody",
          type: "radio",
          label: "Nobody",
          value: "Nobody",
          checked:
            setting === "lastseen"
              ? this.lastSeen === "Nobody"
                ? true
                : false
              : setting === "profilephoto"
              ? this.profilePhoto === "Nobody"
                ? true
                : false
              : this.about === "Nobody"
              ? true
              : false
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          }
        },
        {
          text: "Ok",
          handler: value => {
            setting === "lastseen"
              ? (this.lastSeen = value)
              : setting === "profilephoto"
              ? (this.profilePhoto = value)
              : (this.about = value);
          }
        }
      ]
    });

    await alert.present();
  }
}
