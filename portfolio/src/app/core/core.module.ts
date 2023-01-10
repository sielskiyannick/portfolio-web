import { GenericErrorComponent } from 'src/app/core/components/generic-error/generic-error.component';
import { NavBarComponent } from 'src/app/core/components/nav-bar/nav-bar.component';
import { BusinessSettingsService } from 'src/app/core/services/business-settings.service';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    NavBarComponent,
    GenericErrorComponent
  ],
  providers: [
    BusinessSettingsService
  ],
  exports: [
    NavBarComponent,
    GenericErrorComponent
  ]
})
export class CoreModule { }
