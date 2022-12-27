import { WorkRoutingModule } from './work-routing.module';
import { WorkWrapperComponent } from './components/work-wrapper/work-wrapper.component';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    WorkRoutingModule,
  ],
  declarations: [
    WorkWrapperComponent
  ]
})
export class WorkModule { }
