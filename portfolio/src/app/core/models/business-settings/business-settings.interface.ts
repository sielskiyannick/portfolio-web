import { IFeatureFlag } from "src/app/core/models";

export interface IBusinessSettings {
  featureFlags: IFeatureFlag[];
  appConfig: String[];
}
