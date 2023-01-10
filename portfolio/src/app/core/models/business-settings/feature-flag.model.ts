// TODO ==> to interface ?
export class FeatureFlag {

  constructor(dynamicValues: any = null) {
    if (dynamicValues !== null) {
      Object.assign(this, dynamicValues);
    }
  }

  name: string;
  enabled: boolean;
}
