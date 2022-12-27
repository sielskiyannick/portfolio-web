import { AboutRoutingModule } from 'src/app/about/about-routing.module';
import { AboutWrapperComponent } from 'src/app/about/components/about-wrapper/about-wrapper.component';

import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    AboutRoutingModule
  ],
  declarations: [
    AboutWrapperComponent
  ]
})
export class AboutModule { }
