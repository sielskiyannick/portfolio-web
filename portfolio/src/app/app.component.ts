import { RouteDef } from 'src/app/core/models/route-def.model';

import { Routes } from 'src/app/core/enums';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public routes: RouteDef[] = [
    new RouteDef(Routes.home,'home'),
    new RouteDef(Routes.about,'about'),
    new RouteDef(Routes.work,'work')
  ];

  constructor() {}
}
