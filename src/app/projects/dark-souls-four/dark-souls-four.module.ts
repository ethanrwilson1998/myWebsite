import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DarkSoulsFourPage } from './dark-souls-four.page';

const routes: Routes = [
  {
    path: '',
    component: DarkSoulsFourPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DarkSoulsFourPage]
})
export class DarkSoulsFourPageModule {}
