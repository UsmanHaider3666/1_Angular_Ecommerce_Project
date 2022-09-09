import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitePagesRoutingModule } from './site-pages-routing.module';
import { SitePagesComponent } from './site-pages.component';


@NgModule({
  declarations: [
    SitePagesComponent
  ],
  imports: [
    CommonModule,
    SitePagesRoutingModule
  ]
})
export class SitePagesModule { }
