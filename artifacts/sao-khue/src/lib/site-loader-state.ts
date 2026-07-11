let loaderDone = false;

export function markSiteLoaderDone() {
  loaderDone = true;
}

export function isSiteLoaderDone() {
  return loaderDone;
}
