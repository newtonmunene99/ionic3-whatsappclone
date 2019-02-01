import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NetworkUsagePage } from './network-usage.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkUsagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NetworkUsagePage]
})
export class NetworkUsagePageModule {}
