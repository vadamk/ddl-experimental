import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './extra-pages/not-found/not-found.component';

import { AuthGuard } from '@app/@core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'investor',
    pathMatch: 'full',
  },
  {
    path: 'investor',
    loadChildren: './dashboard/investor/investor.module#InvestorModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'manager',
    loadChildren: './dashboard/manager/manager.module#ManagerModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'superadmin',
    loadChildren: './dashboard/superadmin/superadmin.module#SuperadminModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
