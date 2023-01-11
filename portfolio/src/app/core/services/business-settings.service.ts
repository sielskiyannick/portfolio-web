import { environment } from 'src/environments/environment'
import { IBusinessSettings } from 'src/app/core/interfaces';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export const businessSettingsApiRoutes = {
  businessSettings: 'businesssettings'
}

@Injectable({
  providedIn: 'root'
})
export class BusinessSettingsService {
  constructor(private readonly httpClient: HttpClient) {}

  getBusinessSettings(): Observable<IBusinessSettings> {
    return this.httpClient.get<IBusinessSettings>(environment.api.baseUrl + businessSettingsApiRoutes.businessSettings)
  }
}
