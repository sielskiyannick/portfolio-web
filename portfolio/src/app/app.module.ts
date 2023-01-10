
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/app.component';

import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    CommonModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
