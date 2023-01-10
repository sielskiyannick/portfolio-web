
import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/app.component';

import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
