export function throwIfAlreadyLoaded(parentModule: any, moduleName: any) {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`
    );
  }
}
