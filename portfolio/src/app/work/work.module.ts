import { WorkRoutingModule } from 'src/app/work/work-routing.module';
import { WorkWrapperComponent } from 'src/app/work/components/work-wrapper/work-wrapper.component';
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
