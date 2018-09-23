import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'investor',
    loadChildren: './investor/investor.module#InvestorModule'
  },
  {
    path: 'manager',
    loadChildren: './manager/manager.module#ManagerModule'
  },
  {
    path: 'superadmin',
    loadChildren: './superadmin/superadmin.module#SuperadminModule'
  },
  {
    path: '',
    redirectTo: 'investor'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
