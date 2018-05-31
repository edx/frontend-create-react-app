import extractZip from 'extract-zip';
import chalk from 'chalk';
import axios from 'axios';
import fse from 'fs-extra';
import path from 'path';

import {
  SOURCE_URL,
  SOURCE_FILENAME,
} from './constants';

const extractSource = ({ source, destination }) =>
  new Promise((resolve) => {
    extractZip(source, { dir: path.resolve(destination) }, (error) => {
      if (error) {
        throw error;
      }
      resolve();
    });
  });

const getCookieCutterSource = async ({ destination }) => {
  console.log();
  console.log(chalk.bold.blueBright(`🐶  Fetching source from ${SOURCE_URL}...`));
  const destinationSourceFilename = path.join(destination, SOURCE_FILENAME);

  const response = await axios({
    url: SOURCE_URL,
    method: 'get',
    responseType: 'arraybuffer',
  });

  fse.mkdirSync(destination);
  fse.writeFileSync(destinationSourceFilename, response.data, 'utf8');

  await extractSource({
    source: destinationSourceFilename,
    destination,
  });
};

export default getCookieCutterSource;
