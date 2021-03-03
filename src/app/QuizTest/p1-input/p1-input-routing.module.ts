import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P1InputPage } from './p1-input.page';

const routes: Routes = [
  {
    path: '',
    component: P1InputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P1InputPageRoutingModule {}
