import React from 'react';
import { createApp, APP_MODE, IAppConfig } from 'ice';
// import routes from '$ice/routes';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    errorBoundary: true,
    parseSearchParams: true
  },
  logger: {
    level: APP_MODE === 'build' ? 'error' : 'debug',
  },
  router: {
    basename: '/ice',
    type: 'hash',
    fallback: <div>加载中...</div>,
    // routes
  },
  request: {
    timeout: 5000,
    baseURL: '/',
    interceptors: {
      request: {
        onConfig: (config) => {
          return config;
        }
      }
    }
  }
};

createApp(appConfig);
