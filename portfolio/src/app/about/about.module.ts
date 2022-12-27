import { AboutRoutingModule } from './about-routing.module';
import { AboutWrapperComponent } from './components/about-wrapper/about-wrapper.component';

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
