import { GenericErrorComponent } from 'src/app/core/components/generic-error/generic-error.component';
import { Routes as RoutePath } from 'src/app/core/enums/routes.enum';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: RoutePath.about,
    loadChildren: () => import('src/app/about/about.module').then(m => m.AboutModule)
  },
  {
    path: RoutePath.work,
    loadChildren: () => import('src/app/work/work.module').then(m => m.WorkModule)
  },
  {
    path: RoutePath.home,
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: RoutePath.empty,
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: RoutePath.any,
    component: GenericErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
