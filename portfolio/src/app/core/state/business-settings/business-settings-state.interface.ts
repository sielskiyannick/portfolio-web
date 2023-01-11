import { IBusinessSettings } from "src/app/core/interfaces";

export interface IBusinessSettingsState {
  businessSettings: IBusinessSettings | null;
  error: Error | null;
  businessSettingsLoaded: boolean;
}
