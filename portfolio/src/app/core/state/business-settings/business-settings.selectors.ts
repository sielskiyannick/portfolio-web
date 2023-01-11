import { IBusinessSettingsState } from 'src/app/core/state';

import { createFeatureSelector, createSelector } from '@ngrx/store';

const getBusinessSettingsSelectorDefinition = createFeatureSelector<IBusinessSettingsState>('businessSettings');

export const getBusinessSettings = createSelector(
  getBusinessSettingsSelectorDefinition,
  state => state
);

