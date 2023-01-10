import { WorkRoutingModule } from 'src/app/work/work-routing.module';
import { WorkWrapperComponent } from 'src/app/work/components/work-wrapper/work-wrapper.component';
import { SharedModule } from 'src/app//shared/shared.module';

import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    WorkRoutingModule,
    SharedModule
  ],
  declarations: [
    WorkWrapperComponent
  ]
})
export class WorkModule { }
