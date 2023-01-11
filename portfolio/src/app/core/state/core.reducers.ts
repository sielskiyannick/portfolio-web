
import { ActionReducerMap } from '@ngrx/store';

import { businessSettingReducers, IAppState } from 'src/app/core/state';

export const coreReducers: ActionReducerMap<IAppState> = {
  businessSettings: businessSettingReducers.businessSettingsReducer
};
