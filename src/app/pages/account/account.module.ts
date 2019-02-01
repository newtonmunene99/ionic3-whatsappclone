import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { AccountPage } from "./account.page";

const routes: Routes = [
  {
    path: "",
    component: AccountPage
  },
  {
    path: "privacy",
    loadChildren: "../privacy/privacy.module#PrivacyPageModule"
  },
  {
    path: "security",
    loadChildren: "../security/security.module#SecurityPageModule"
  },
  {
    path: "two-step-verification",
    loadChildren:
      "../two-step-verification/two-step-verification.module#TwoStepVerificationPageModule"
  },
  {
    path: "change-number",
    loadChildren: "../change-number/change-number.module#ChangeNumberPageModule"
  },
  {
    path: "request-account-info",
    loadChildren:
      "../request-account-info/request-account-info.module#RequestAccountInfoPageModule"
  },
  {
    path: "delete-account",
    loadChildren:
      "../delete-account/delete-account.module#DeleteAccountPageModule"
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountPage]
})
export class AccountPageModule {}
