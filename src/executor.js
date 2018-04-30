import untildify from 'untildify';
import fse from 'fs-extra';
import { spawn } from 'child-process-promise';
import normalizePackageData from 'normalize-package-data';
import sortPackageJSON from 'sort-package-json';
import isOnline from 'is-online';
import chalk from 'chalk';

import prompts from './prompts';
import writeBaseTemplates from './fileWriters';

const executor = async () => {
  const online = await isOnline();

  if (!online) {
    console.log(chalk.bold.redBright("⛔ 📡  You don't seem to be online"));
    return;
  }

  const {
    packageName,
    targetDirectory,
  } = await prompts();

  const destinationDirectory = untildify(targetDirectory);
  const templateValues = Object.freeze({
    packageName,
  });

  await writeBaseTemplates({
    templateValues,
    destination: destinationDirectory,
  });

  const packageJSONLocation = `${destinationDirectory}/package.json`;
  const packageJSON = fse.readJsonSync(packageJSONLocation, 'utf8');

  normalizePackageData(packageJSON);
  fse.writeJsonSync(packageJSONLocation, sortPackageJSON(packageJSON), 'utf8');

  console.log(chalk.bold.cyanBright('⌛ 🤞 Installing packages'));
  await spawn('npm', ['install'], { cwd: destinationDirectory, stdio: 'inherit' });
  await spawn('git', ['init'], { cwd: destinationDirectory, stdio: 'inherit' });

  console.log(chalk.bold.magentaBright('Installation complete! 🎉 🎈 🎊'));
  console.log();

  console.log(`🏇 ${chalk.bold.magentaBright('Change')} to destination directory: ${chalk.bold.cyanBright(`cd ${destinationDirectory}`)}`);
  console.log(`🎭  ${chalk.bold.magentaBright('Run')} ${chalk.bold.blueBright('jest')} ${chalk.bold.magentaBright('tests')}: ${chalk.bold.cyanBright('npm run test')} `);
  console.log(`🏗️  ${chalk.bold.magentaBright('Build')}: ${chalk.bold.cyanBright('npm run build')}`);
  console.log(`👕  ${chalk.bold.magentaBright('Run')} ${chalk.bold.blueBright('eslint')}: ${chalk.bold.cyanBright('npm run lint')}`);
};

export default executor;
