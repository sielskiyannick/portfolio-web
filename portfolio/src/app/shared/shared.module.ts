import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class SharedModule { }
