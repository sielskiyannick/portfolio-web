import { IntroPresentationComponent, IntroContainerComponent } from 'src/app/home/components/intro';
import { ServicesContainerComponent, ServicesPresentationComponent } from 'src/app/home/components/services';

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
    HomeWrapperComponent,
    IntroContainerComponent,
    IntroPresentationComponent,
    ServicesContainerComponent,
    ServicesPresentationComponent
  ]
})
export class HomeModule { }
