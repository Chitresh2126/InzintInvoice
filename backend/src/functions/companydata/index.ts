import { CompanyData } from './schema';

import { handlerPath } from '@libs/handler-resolver';

export const companyfunctions = {
    addcompanydata: {
    handler: `${handlerPath(__dirname)}/handler.addcompanydata`,
    events: [
      {
        http: {
          method: 'post',
          path: 'addcompanydata',
          cors : true,
          request: {
            schemas: {
              'application/json': CompanyData,
            },
          },
        },
      },
    ],
  },
  getcompanydata: {
    handler: `${handlerPath(__dirname)}/handler.getcompanydata`,
    events: [
      {
        http: {
          method: 'get',
          path: 'getcompanydata',
          cors : true,
        
        },
      },
    ],
  },
}