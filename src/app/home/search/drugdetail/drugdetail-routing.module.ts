import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrugdetailPage } from './drugdetail.page';

const routes: Routes = [
  {
    path: '',
    component: DrugdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrugdetailPageRoutingModule {}
