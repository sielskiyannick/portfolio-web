import { GenericErrorComponent } from './core/components/generic-error/generic-error.component';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { Routes as RoutePath } from './core/enums/routes.enum';

const routes: Routes = [
  {
    path: RoutePath.about,
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: RoutePath.work,
    loadChildren: () => import('./work/work.module').then(m => m.WorkModule)
  },
  {
    path: RoutePath.home,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: RoutePath.empty,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: RoutePath.any,
    component: GenericErrorComponent
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
})
export class AppRoutingModule { }
