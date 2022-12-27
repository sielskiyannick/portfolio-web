import { HomeRoutingModule } from './home-routing.module';
import { HomeWrapperComponent } from './components/home-wrapper/home-wrapper.component';

import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    HomeRoutingModule
  ],
  declarations: [
    HomeWrapperComponent
  ]
})
export class HomeModule { }
