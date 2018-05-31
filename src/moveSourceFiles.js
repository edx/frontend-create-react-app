import fse from 'fs-extra';
import moveFile from 'move-file';

import {
  TEMP_DIR,
  SOURCE_FOLDER,
} from './constants';

const moveSourceFiles = async ({ destination }) => {
  await moveFile(SOURCE_FOLDER, destination);
  fse.removeSync(TEMP_DIR);
};

export default moveSourceFiles;
