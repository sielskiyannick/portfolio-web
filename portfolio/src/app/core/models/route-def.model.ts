export class RouteDef {

  private _routePath: string;
  private _routeLabel: string;

  constructor(routePath: string, routeLabel: string) {
    this._routePath = routePath;
    this._routeLabel = routeLabel;
  }

  public get routePath(): string {
    return this._routePath;
  }
  public get routeLabel(): string {
    return this._routeLabel;
  }

}
