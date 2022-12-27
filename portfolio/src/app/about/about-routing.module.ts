import { AboutWrapperComponent } from './components/about-wrapper/about-wrapper.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: '',
    component: AboutWrapperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
