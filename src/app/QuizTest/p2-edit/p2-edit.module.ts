import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P2EditPageRoutingModule } from './p2-edit-routing.module';

import { P2EditPage } from './p2-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P2EditPageRoutingModule
  ],
  declarations: [P2EditPage]
})
export class P2EditPageModule {}
