import { IFeatureFlag } from "src/app/core/interfaces";

export interface IBusinessSettings {
  featureFlags: IFeatureFlag[];
  appConfig: String[];
}
