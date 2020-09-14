import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
        {
          path: 'locate',
          loadChildren: () => import('./locate/locate.module').then( m => m.LocatePageModule)
        },
        {
          path: 'search',
          loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
        },
        {
          path: '',
          redirectTo: '/home/search',
          pathMatch: 'full'
        }
    ]
  },
  {
    path: '',
    redirectTo: '/home/locate',
    pathMatch: 'full'
  },
  {
    path: 'pharmacy',
    loadChildren: () => import('./pharmacy/pharmacy.module').then( m => m.PharmacyPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'emergency',
    loadChildren: () => import('./emergency/emergency.module').then( m => m.EmergencyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
