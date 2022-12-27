import { HomeRoutingModule } from 'src/app/home/home-routing.module';
import { HomeWrapperComponent } from 'src/app/home/components/home-wrapper/home-wrapper.component';

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
