import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HideStatusFromPage } from './hide-status-from.page';

const routes: Routes = [
  {
    path: '',
    component: HideStatusFromPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HideStatusFromPage]
})
export class HideStatusFromPageModule {}
