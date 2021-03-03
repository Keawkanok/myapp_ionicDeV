import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bmip2Page } from './bmip2.page';

const routes: Routes = [
  {
    path: '',
    component: Bmip2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bmip2PageRoutingModule {}
