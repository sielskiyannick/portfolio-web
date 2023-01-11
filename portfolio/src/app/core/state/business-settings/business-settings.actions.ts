import { createAction, props } from '@ngrx/store';

import { IBusinessSettings } from 'src/app/core/models';

export const getBusinessSettings = createAction(
  '[BusinessSettings] Get business settings'
);

// export const setBusinessSettings = createAction(
//   '[BusinessSettings] Set business settings',
//   props<{ businessSettings: IBusinessSettings }>()
// );
