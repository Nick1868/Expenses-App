import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'new',
        children: [
          {
            path: '',
            loadChildren: () => import('./new/new.module').then(m => m.NewPageModule)
          },
        ]
      },
      {
        path: 'stored',
        children: [
          {
            path: '',
            loadChildren: () => import('./stored/stored.module').then(m => m.StoredPageModule)
          },
        ]
      },
      {
        path: '',
        redirectTo: '/home/tabs/new',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/new',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
