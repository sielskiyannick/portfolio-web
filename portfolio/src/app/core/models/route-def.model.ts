export class RouteDef {

  private _routePath: string;
  private _routeLabel: string;

  constructor(routePath: string, routeLabel: string) {
    this._routePath = routePath;
    this._routeLabel = routeLabel;
  }

  get routePath(): string {
    return this._routePath;
  }
  get routeLabel(): string {
    return this._routeLabel;
  }

}
