import extractZip from 'extract-zip';
import chalk from 'chalk';
import axios from 'axios';
import fse from 'fs-extra';

import {
  SOURCE_URL,
  SOURCE_FILENAME,
  TEMP_DIR,
} from './constants';

const extractSource = source =>
  new Promise((resolve) => {
    extractZip(source, { dir: TEMP_DIR }, (error) => {
      if (error) {
        throw error;
      }
      resolve();
    });
  });

const getCookieCutterSource = async () => {
  console.log(chalk.bold.blueBright(`🐶  Fetching source from ${SOURCE_URL}...`));

  const response = await axios({
    url: SOURCE_URL,
    method: 'get',
    responseType: 'arraybuffer',
  });

  if (fse.existsSync(TEMP_DIR)) {
    fse.removeSync(TEMP_DIR);
  }

  fse.mkdirSync(TEMP_DIR);
  fse.writeFileSync(SOURCE_FILENAME, response.data, 'utf8');

  await extractSource(SOURCE_FILENAME);
};

export default getCookieCutterSource;
