#!/usr/bin/env node

import program from 'commander';

import pkg from '../package.json';

import executor from './executor';

program.version(pkg.version)
  .description('CLI that builds starting boilerplate edX for new front-end applications')
  .parse(process.argv);

executor();