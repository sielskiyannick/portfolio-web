import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export class RouteDef {

  private _routePath: string;
  private _routeLabel: string;
  private _icon: IconDefinition;

  constructor(routePath: string, routeLabel: string, icon: IconDefinition) {
    this._routePath = routePath;
    this._routeLabel = routeLabel;
    this._icon = icon;
  }

  get routePath(): string {
    return this._routePath;
  }
  get routeLabel(): string {
    return this._routeLabel;
  }
  get icon(): IconDefinition {
    return this._icon;
  }
}
