import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
  },
  {
    path: ':drugId',
    loadChildren: () => import('./drugdetail/drugdetail.module').then( m => m.DrugdetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
