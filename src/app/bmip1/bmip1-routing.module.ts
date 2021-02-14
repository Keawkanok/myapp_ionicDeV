import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bmip1Page } from './bmip1.page';

const routes: Routes = [
  {
    path: '',
    component: Bmip1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bmip1PageRoutingModule {}
