import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListbuyPage } from './listbuy.page';

const routes: Routes = [
  {
    path: '',
    component: ListbuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListbuyPageRoutingModule {}
