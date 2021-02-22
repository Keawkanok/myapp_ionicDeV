import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideoppPage } from './slideopp.page';

const routes: Routes = [
  {
    path: '',
    component: SlideoppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlideoppPageRoutingModule {}
