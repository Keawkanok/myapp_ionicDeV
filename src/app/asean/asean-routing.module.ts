import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AseanPage } from './asean.page';

const routes: Routes = [
  {
    path: '',
    component: AseanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AseanPageRoutingModule {}
