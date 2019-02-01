import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TwoStepVerificationPage } from './two-step-verification.page';

const routes: Routes = [
  {
    path: '',
    component: TwoStepVerificationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TwoStepVerificationPage]
})
export class TwoStepVerificationPageModule {}
