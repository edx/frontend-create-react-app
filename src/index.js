#!/usr/bin/env node

import program from 'commander';

import pkg from '../package.json';

import executor from './executor';

program.version(pkg.version)
  .description('CLI that builds starting boilerplate edX for new front-end applications')
  .option('-b, --branch <name>', 'specify a branch to clone')
  .parse(process.argv);

executor(program.branch);
