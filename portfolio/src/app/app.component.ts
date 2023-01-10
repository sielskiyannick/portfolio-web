import { BusinessSettingsService } from './core/services/business-settings.service';
import { BusinessSettings } from 'src/app/core/models/business-settings/business-settings.model';
import { RouteDef } from 'src/app/core/models/route-def.model';

import { Routes } from 'src/app/core/enums';

import { Component, OnInit } from '@angular/core';
import { catchError, EMPTY, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

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

  private businessSettings: BusinessSettings = new BusinessSettings();

  public errorOccurred: boolean = false;

  constructor(private readonly businessSettingsService: BusinessSettingsService) {}

  ngOnInit(): void {
    this.businessSettingsService.getBusinessSettings()
    .pipe(
      tap((result: BusinessSettings) => console.log(result)),
      catchError((error: HttpErrorResponse) => {
        this.errorOccurred = true;
        return EMPTY;
      })
    )
    .subscribe({
      next: (businessSettings: BusinessSettings) => {
        this.businessSettings = businessSettings;
      }
    });
  }
}
