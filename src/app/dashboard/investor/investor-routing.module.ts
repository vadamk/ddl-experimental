import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestorComponent } from './investor/investor.component';

const routes: Routes = [
  {
    path: '',
    component: InvestorComponent,
    children: [
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'mandates',
        loadChildren: './mandates/mandates.module#MandatesModule'
      },
      {
        path: 'questionnaires',
        loadChildren: './questionnaires/questionnaires.module#QuestionnairesModule'
      },
      {
        path: 'reports',
        loadChildren: './reports/reports.module#ReportsModule'
      },
      {
        path: '',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvestorRoutingModule { }
