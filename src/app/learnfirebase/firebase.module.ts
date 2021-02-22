import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirebasePageRoutingModule } from './firebase-routing.module';

import { FirebasePage } from './firebase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebasePageRoutingModule
  ],
  declarations: [FirebasePage]
})
export class FirebasePageModule {}
