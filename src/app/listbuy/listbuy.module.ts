import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListbuyPageRoutingModule } from './listbuy-routing.module';

import { ListbuyPage } from './listbuy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListbuyPageRoutingModule
  ],
  declarations: [ListbuyPage]
})
export class ListbuyPageModule {}
