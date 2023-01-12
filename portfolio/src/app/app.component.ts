import { IHaveLoader } from 'src/app/core/interfaces/i-have-loader.interface';
import { RouteDef } from 'src/app/core/models/route-def.model';
import { Routes } from 'src/app/core/enums';
import { businessSettingsActions, businessSettingsSelectors, IBusinessSettingsState } from 'src/app/core/state';

import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, IHaveLoader {

  routes: RouteDef[] = [
    new RouteDef(Routes.about,'about'),
    new RouteDef(Routes.work,'work')
  ];
  dataLoaded: boolean = false;

  constructor(
    private readonly businessSettingsStore: Store<IBusinessSettingsState>,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    // Initial fetch of all settings necessary to startup the site
    this.businessSettingsStore.dispatch(businessSettingsActions.setBusinessSettings({ businessSettings: null }));

    this.businessSettingsStore.select(businessSettingsSelectors.getBusinessSettings)
    .subscribe({
      next: (businessSettingsState: IBusinessSettingsState) => {
        if (businessSettingsState.error) {
          console.log(businessSettingsState.error);
          // TODO ==> log error
          this.navigateToErrorPage();
        }

        if (businessSettingsState.businessSettingsLoaded || businessSettingsState.error) {
          console.log(businessSettingsState);
          this.dataLoaded = true;
        }
      },
      error: (error: Error) => {
        console.log(error);
          // TODO ==> log error
          this.navigateToErrorPage();
      }
    });
  }

  private navigateToErrorPage(): void {
    this.router.navigate([Routes.error.toString()]);
  }
}
