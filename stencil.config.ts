import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'lifecycle-order-bug',
  taskQueue: 'immediate',
  sourceMap: false,
  outputTargets: [
    /* {
      type: 'dist',
      esmLoaderPath: '../loader',
    },*/
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    /* {
      type: 'www',
      serviceWorker: null, // disable service workers
    },*/
  ],
  testing: {
    browserHeadless: 'shell',
  },
};
