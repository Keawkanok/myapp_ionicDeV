import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlideoppPageRoutingModule } from './slideopp-routing.module';

import { SlideoppPage } from './slideopp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlideoppPageRoutingModule
  ],
  declarations: [SlideoppPage]
})
export class SlideoppPageModule {}
