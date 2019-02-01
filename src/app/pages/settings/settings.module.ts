import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { SettingsPage } from "./settings.page";

const routes: Routes = [
  {
    path: "",
    component: SettingsPage
  },
  {
    path: "my-profile",
    loadChildren: "../my-profile/my-profile.module#MyProfilePageModule"
  },
  {
    path: "account",
    loadChildren: "../account/account.module#AccountPageModule"
  },
  {
    path: "chats-settings",
    loadChildren:
      "../chats-settings/chats-settings.module#ChatsSettingsPageModule"
  },
  {
    path: "notifications",
    loadChildren:
      "../notifications/notifications.module#NotificationsPageModule"
  },
  {
    path: "data-storage",
    loadChildren: "../data-storage/data-storage.module#DataStoragePageModule"
  },
  { path: "help", loadChildren: "../help/help.module#HelpPageModule" }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
