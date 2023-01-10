import { FeatureFlag } from 'src/app/core/models';

// TODO ==> to interface ?
export class BusinessSettings {

  constructor(dynamicValues: any = null) {
    if (dynamicValues !== null) {
      Object.assign(this, dynamicValues);

      if (dynamicValues.hasOwnProperty('FeatureFlags')) {
        dynamicValues['FeatureFlags'].forEach((featureFlag: any) => {
          this.featureFlags.push(new FeatureFlag(featureFlag));
        });
      }
    }
  }

  featureFlags: FeatureFlag[] = [];
}
