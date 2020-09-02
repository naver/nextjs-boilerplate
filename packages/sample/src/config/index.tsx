/*
nextjs-boilerplate
Copyright 2020-present NAVER Corp.
MIT license
 */

import { IConfig } from '@nextjs-boilerplate/common/src/config';
import development from '@nextjs-boilerplate/common/src/config/development';
import test from '@nextjs-boilerplate/common/src/config/test';
import production from '@nextjs-boilerplate/common/src/config/production';

const configMap = new Map<string, IConfig>([
  ['development', development],
  ['test', test],
  ['production', production],
]);

const config = configMap.get(process.env.NODE_ENV) || development;

export default config;
