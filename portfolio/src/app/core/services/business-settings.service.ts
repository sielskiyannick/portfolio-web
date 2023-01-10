import { BusinessSettings } from 'src/app/core/models/business-settings/business-settings.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'

export const businessSettingsApiRoutes = {
  businessSettings: 'businesssettings'
}

@Injectable({
  providedIn: 'root'
})
export class BusinessSettingsService {
  constructor(private readonly httpClient: HttpClient) {}

  getBusinessSettings(): Observable<BusinessSettings> {
    return this.httpClient.get<BusinessSettings>(environment.api.baseUrl + businessSettingsApiRoutes.businessSettings)
  }
}
