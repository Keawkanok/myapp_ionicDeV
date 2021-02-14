import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Bmip2PageRoutingModule } from './bmip2-routing.module';

import { Bmip2Page } from './bmip2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Bmip2PageRoutingModule
  ],
  declarations: [Bmip2Page]
})
export class Bmip2PageModule {}
