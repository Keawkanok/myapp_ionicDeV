import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P1InputPageRoutingModule } from './p1-input-routing.module';

import { P1InputPage } from './p1-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P1InputPageRoutingModule
  ],
  declarations: [P1InputPage]
})
export class P1InputPageModule {}
