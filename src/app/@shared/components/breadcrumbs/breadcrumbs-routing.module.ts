import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './+breadcrumbs/breadcrumbs.component';

const routes: Routes = [
	{
		path: '/',
		component: BreadcrumbsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreadcrumbsRoutingModule { }
