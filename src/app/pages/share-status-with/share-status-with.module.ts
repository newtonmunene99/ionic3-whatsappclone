import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShareStatusWithPage } from './share-status-with.page';

const routes: Routes = [
  {
    path: '',
    component: ShareStatusWithPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShareStatusWithPage]
})
export class ShareStatusWithPageModule {}
