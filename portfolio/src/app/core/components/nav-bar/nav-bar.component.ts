import { Component, Input } from "@angular/core";

import { RouteDef } from 'src/app/core/models';

import { Routes } from 'src/app/core/enums';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: []
})
export class NavBarComponent {
  @Input() routes: RouteDef[] = [];

  routePaths = Routes;
}
