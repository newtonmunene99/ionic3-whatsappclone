import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BlockedContactsPage } from './blocked-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: BlockedContactsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlockedContactsPage]
})
export class BlockedContactsPageModule {}
