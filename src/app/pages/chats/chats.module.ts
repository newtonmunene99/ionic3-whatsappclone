import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ChatsPage } from "./chats.page";

const routes: Routes = [
  {
    path: "",
    component: ChatsPage
  },
  { path: "chat", loadChildren: "../chat/chat.module#ChatPageModule" },
  {
    path: "contacts",
    loadChildren: "../contacts/contacts.module#ContactsPageModule"
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatsPage]
})
export class ChatsPageModule {}
