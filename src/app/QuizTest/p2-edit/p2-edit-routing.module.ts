import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { P2EditPage } from './p2-edit.page';

const routes: Routes = [
  {
    path: '',
    component: P2EditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class P2EditPageRoutingModule {}
