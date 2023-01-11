import { IBusinessSettings } from "src/app/core/models";

export interface IBusinessSettingsState {
  businessSettings: IBusinessSettings | null;
  error: Error | null;
}
