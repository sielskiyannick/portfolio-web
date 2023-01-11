import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, mergeMap, of } from "rxjs";

import { BusinessSettingsService } from "src/app/core/services";
import { businessSettingsActions } from 'src/app/core/state';

@Injectable()
export class BusinessSettingsEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly businessSettingsService: BusinessSettingsService
  ) {}

  getBusinessSettings$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(businessSettingsActions.setBusinessSettings),
        mergeMap(() => this.businessSettingsService.getBusinessSettings()
          .pipe(
            map(businessSettings => businessSettingsActions.setBusinessSettingsSuccess({ businessSettings: businessSettings })),
            catchError(error => of(businessSettingsActions.setBusinessSettingsFailure({ error: error })))
          )
        )
      )
  });
}
