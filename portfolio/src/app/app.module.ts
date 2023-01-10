import { BusinessSettingsService } from './core/services/business-settings.service';
import { NavBarComponent, GenericErrorComponent } from 'src/app/core/components';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    GenericErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    BusinessSettingsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
