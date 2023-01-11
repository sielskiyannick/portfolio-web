export abstract class EnsureModuleLoadedOnceGuard {
  constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(`Targetmodule: ${targetModule.constructor.name} may only be loaded once! Import this module in the root app module only!`);
    }
  }
}
