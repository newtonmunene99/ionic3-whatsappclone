import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyProfilePhotoPage } from './my-profile-photo.page';

const routes: Routes = [
  {
    path: '',
    component: MyProfilePhotoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyProfilePhotoPage]
})
export class MyProfilePhotoPageModule {}
