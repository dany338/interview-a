export const waitFor = (ms: number = 100) => new Promise<void>((resolve) => {
  setTimeout(() => {
    resolve();
  }, ms);
});