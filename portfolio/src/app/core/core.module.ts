import { GenericErrorComponent } from 'src/app/core/components/generic-error/generic-error.component';
import { NavBarComponent } from 'src/app/core/components/nav-bar/nav-bar.component';
import { BusinessSettingsService } from 'src/app/core/services/business-settings.service';
import { EnsureModuleLoadedOnceGuard } from 'src/app/core/classes';
import { coreReducers, BusinessSettingsEffects } from 'src/app/core/state';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from "@angular/core";
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot(coreReducers),
    EffectsModule.forRoot([BusinessSettingsEffects])
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
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
