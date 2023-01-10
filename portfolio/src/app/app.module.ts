
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/app.component';

import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    SharedModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
