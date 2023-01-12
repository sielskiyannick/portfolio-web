import { Component, Input, OnInit } from "@angular/core";

import { faHouseLaptop, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { RouteDef } from 'src/app/core/models';
import { Routes } from 'src/app/core/enums';

@Component({
  selector: 'pf-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: []
})
export class NavBarComponent implements OnInit {
  @Input() routes: RouteDef[] = [];

  routePaths = Routes;
  homeRouteDef: RouteDef;

  constructor() {  }

  ngOnInit(): void {
    this.homeRouteDef = new RouteDef(Routes.home, "HOME", faHouseLaptop)
  }
}
