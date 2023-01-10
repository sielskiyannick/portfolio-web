import { HomeRoutingModule } from 'src/app/home/home-routing.module';
import { HomeWrapperComponent } from 'src/app/home/components/home-wrapper/home-wrapper.component';
import { SharedModule } from 'src/app//shared/shared.module';

import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeWrapperComponent
  ]
})
export class HomeModule { }
