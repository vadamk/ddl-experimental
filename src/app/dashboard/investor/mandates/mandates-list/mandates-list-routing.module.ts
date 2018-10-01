import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MandatesListComponent } from './+mandates-list/mandates-list.component';

const routes: Routes = [
  {
    path: '',
    component: MandatesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MandatesListRoutingModule { }
