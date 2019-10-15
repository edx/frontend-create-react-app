/* eslint no-console: 0 */

import extractZip from 'extract-zip';
import chalk from 'chalk';
import axios from 'axios';
import fs from 'fs';
import fse from 'fs-extra';
import path from 'path';

import { SOURCE_BASE_URL, SOURCE_BASE_FOLDER } from './constants';

const getSource = (branchName) => {
  const branch = branchName || 'master';
  const branchFormatted = branch.replace('/', '-');
  return {
    url: `${SOURCE_BASE_URL}/${branch}.zip`,
    fileName: `${branchFormatted}.zip`,
    folder: `${SOURCE_BASE_FOLDER}-${branchFormatted}`,
  };
};

const extractSource = ({ source, destination }) =>
  new Promise((resolve) => {
    extractZip(source, { dir: path.resolve(destination) }, (error) => {
      if (error) {
        throw error;
      }
      resolve();
    });
  });

function moveDirFilesSync(sourceDir, destination) {
  const files = fs.readdirSync(sourceDir);

  files.forEach((file) => {
    fse.moveSync(`${sourceDir}/${file}`, `${destination}/${file}`);
  });
}

const getCookieCutterSource = async ({ branchName, destination }) => {
  const source = getSource(branchName);

  console.log();
  console.log(chalk.bold.blueBright(`🐶  Fetching source from ${source.url}...`));

  const destinationSourceFilename = path.join(destination, source.fileName);

  const response = await axios({
    url: source.url,
    method: 'get',
    responseType: 'arraybuffer',
  });

  fse.mkdirSync(destination);
  fse.writeFileSync(destinationSourceFilename, response.data, 'utf8');

  await extractSource({
    source: destinationSourceFilename,
    destination,
  });

  /*
    Code is cloned inside "frontend-cookiecutter-application-master".
    This extracts the content files to an upper level so the code
    will be created in the folder you indicated
  */
  moveDirFilesSync(`${destination}/frontend-cookiecutter-application-master`, destination);

  // Removes the temporary folder and zip-file
  fse.removeSync(`${destination}/frontend-cookiecutter-application-master`);
  fse.removeSync(`${destination}/master.zip`);
};

export {
  getCookieCutterSource,
  getSource,
};
