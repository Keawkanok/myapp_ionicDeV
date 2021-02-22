import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebasePage } from './firebase.page';

const routes: Routes = [
  {
    path: '',
    component: FirebasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebasePageRoutingModule {}
