import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { StatusPrivacyPage } from "./status-privacy.page";

const routes: Routes = [
  {
    path: "",
    component: StatusPrivacyPage
  },
  {
    path: "hide-status-from",
    loadChildren:
      "../hide-status-from/hide-status-from.module#HideStatusFromPageModule"
  },
  {
    path: "share-status-with",
    loadChildren:
      "../share-status-with/share-status-with.module#ShareStatusWithPageModule"
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StatusPrivacyPage]
})
export class StatusPrivacyPageModule {}
