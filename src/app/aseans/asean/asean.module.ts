import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AseanPageRoutingModule } from './asean-routing.module';

import { AseanPage } from './asean.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AseanPageRoutingModule
  ],
  declarations: [AseanPage]
})
export class AseanPageModule {}
