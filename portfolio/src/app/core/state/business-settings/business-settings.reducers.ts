import { createReducer, on } from '@ngrx/store';

import { businessSettingsActions, IBusinessSettingsState } from 'src/app/core/state';

const initialBusinessSettingsState: IBusinessSettingsState =
{
  businessSettings: null,
  error: null,
  businessSettingsLoaded: false
};

export const businessSettingsReducer = createReducer<IBusinessSettingsState>(
  initialBusinessSettingsState,
  on(businessSettingsActions.getBusinessSettings, (state): IBusinessSettingsState => ({
    ...state
  })),
  on(businessSettingsActions.setBusinessSettings, (state, action): IBusinessSettingsState => ({
    ...state,
    businessSettings: action.businessSettings
  })),
  on(businessSettingsActions.setBusinessSettingsSuccess, (state, action): IBusinessSettingsState => ({
    ...state,
    businessSettings: action.businessSettings,
    businessSettingsLoaded: true
  })),
  on(businessSettingsActions.setBusinessSettingsFailure, (state, action): IBusinessSettingsState => ({
    ...state,
    businessSettings: null,
    error: action.error,
    businessSettingsLoaded: false
  }))
);
