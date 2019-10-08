import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WormWranglersPage } from './worm-wranglers.page';

const routes: Routes = [
  {
    path: '',
    component: WormWranglersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WormWranglersPage]
})
export class WormWranglersPageModule {}
