import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', loadChildren: () => import('./site-pages/site-pages.module').then(m => m.SitePagesModule) }]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
 
})
export class AppRoutingModule { }
