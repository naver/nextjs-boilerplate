/*
nextjs-boilerplate
Copyright 2020-present NAVER Corp.
MIT license
 */

import { constants } from 'http2';

export default async (req: any, res: any) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = constants.HTTP_STATUS_OK;
  res.end(JSON.stringify({ status: 'Ready' }));
};
