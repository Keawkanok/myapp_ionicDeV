import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bmip1PageRoutingModule } from './bmip1-routing.module';

import { Bmip1Page } from './bmip1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bmip1PageRoutingModule
  ],
  declarations: [Bmip1Page]
})
export class Bmip1PageModule {}
