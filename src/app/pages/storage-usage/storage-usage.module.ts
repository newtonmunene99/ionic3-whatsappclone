import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StorageUsagePage } from './storage-usage.page';

const routes: Routes = [
  {
    path: '',
    component: StorageUsagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StorageUsagePage]
})
export class StorageUsagePageModule {}
