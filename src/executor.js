/* eslint no-console: 0 */

import untildify from 'untildify';
import fse from 'fs-extra';
import { spawn } from 'child-process-promise';
import isOnline from 'is-online';
import chalk from 'chalk';

import prompts from './prompts';
import getCookieCutterSource from './getCookieCutterSource';
import moveSourceFiles from './moveSourceFiles';
import writeDataToSourceFiles from './writeDataToSourceFiles';

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

  if (fse.existsSync(destinationDirectory)) {
    console.log(chalk.bold.redBright(`⛔  The destination location ${destinationDirectory} already exists.`));
    return;
  }

  try {
    await getCookieCutterSource({ destination: destinationDirectory });
  } catch (error) {
    console.log(chalk.bold.redBright(`⛔  There was a problem fetching source files: ${error}`));
    return;
  }

  await moveSourceFiles({ destination: destinationDirectory });

  await writeDataToSourceFiles({
    files: ['package.json', 'docker-compose.yml'],
    destination: destinationDirectory,
    packageName,
  });

  console.log();
  console.log(chalk.bold.cyanBright('⌛ 🤞  Installing packages'));
  await spawn('npm', ['install'], { cwd: destinationDirectory, stdio: 'inherit' });
  await spawn('git', ['init'], { cwd: destinationDirectory, stdio: 'inherit' });

  console.log(chalk.bold.magentaBright('Installation complete! 🎉 🎈 🎊'));
  console.log();

  console.log(`🏇  ${chalk.bold.magentaBright('Change')} to destination directory: ${chalk.bold.cyanBright(`cd ${destinationDirectory}`)}`);
  console.log(`🎭  ${chalk.bold.magentaBright('Run')} ${chalk.bold.blueBright('jest')} ${chalk.bold.magentaBright('tests')}: ${chalk.bold.cyanBright('npm run test')} `);
  console.log(`🏗️  ${chalk.bold.magentaBright('Build')}: ${chalk.bold.cyanBright('npm run build')}`);
  console.log(`👕  ${chalk.bold.magentaBright('Run')} ${chalk.bold.blueBright('eslint')}: ${chalk.bold.cyanBright('npm run lint')}`);
};

export default executor;
