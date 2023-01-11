import { createReducer, on } from '@ngrx/store';

import { businessSettingsActions, IBusinessSettingsState } from 'src/app/core/state';
import { IBusinessSettings } from 'src/app/core/models';

const initialBusinessSettingsState: IBusinessSettingsState = { businessSettings: null, error: null};

export const businessSettingsReducer = createReducer<IBusinessSettingsState>(
  initialBusinessSettingsState,
  on(businessSettingsActions.getBusinessSettings, (state): IBusinessSettingsState => ({
    ...state
  })),
);
