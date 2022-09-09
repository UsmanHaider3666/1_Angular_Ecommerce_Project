import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitePagesComponent } from './site-pages.component';

const routes: Routes = [{ path: '', component: SitePagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SitePagesRoutingModule { }
