import { RouteDef } from 'src/app/core/models/route-def.model';
import { Routes } from 'src/app/core/enums';
import { businessSettingsActions, businessSettingsSelectors, IBusinessSettingsState } from 'src/app/core/state';

import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Store } from '@ngrx/store';

import { catchError, EMPTY, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  public routes: RouteDef[] = [
    new RouteDef(Routes.about,'about'),
    new RouteDef(Routes.work,'work')
  ];

  public errorOccurred: boolean = false;

  constructor(
    private readonly businessSettingsStore: Store<IBusinessSettingsState>,
  ) {}

  ngOnInit(): void {
    // Initial fetch of all settings necessary to startup the site
    this.businessSettingsStore.dispatch(businessSettingsActions.setBusinessSettings({ businessSettings: null }));

    this.businessSettingsStore.select(businessSettingsSelectors.getBusinessSettings)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        this.errorOccurred = true;
        // TODO ==> log error
        return EMPTY;
      })
    )
    .subscribe({
      next: (businessSettingsState: IBusinessSettingsState) => {
        if (businessSettingsState.error) {
          this.errorOccurred = true;
          // TODO ==> log error
        }
      }
    });
  }
}
