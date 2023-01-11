import { createAction, props } from '@ngrx/store';

import { IBusinessSettings } from 'src/app/core/models';

export const getBusinessSettings = createAction(
  '[BusinessSettings] Get business settings'
);

export const setBusinessSettings = createAction(
  '[BusinessSettings] Set business settings',
  props<{ businessSettings: IBusinessSettings | null }>()
);

export const setBusinessSettingsSuccess = createAction(
  '[BusinessSettings] Set business settings success',
  props<{ businessSettings: IBusinessSettings }>()
);

export const setBusinessSettingsFailure = createAction(
  '[BusinessSettings] Set business settings failure',
  props<{ error: Error }>()
);
