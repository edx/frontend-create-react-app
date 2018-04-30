import inquirer from 'inquirer';
import validateNpmPackageName from 'validate-npm-package-name';
import chalk from 'chalk';

const prompts = async () => (
  inquirer.prompt([
    {
      name: 'packageName',
      message: chalk.bold.greenBright('📛  Input a package name'),
      type: 'input',
      validate: packageName => validateNpmPackageName(packageName).validForNewPackages || chalk.bold.redBright(`😞  ${packageName} is an invalid package name`),
    },
    {
      name: 'targetDirectory',
      message: chalk.bold.magentaBright('📍  Input the relative package location'),
      type: 'input',
      validate: answer => answer && answer.length > 0,
    },
  ])
);

export default prompts;
