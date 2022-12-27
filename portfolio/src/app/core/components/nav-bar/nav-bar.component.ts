import { Component, Input } from "@angular/core";

import { RouteDef } from 'src/app/core/models';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: []
})
export class NavBarComponent {
  @Input() routes: RouteDef[] = [];
}
