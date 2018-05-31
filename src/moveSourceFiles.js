import fse from 'fs-extra';
import path from 'path';
import globby from 'globby';

import { SOURCE_FOLDER, SOURCE_FILENAME } from './constants';

const moveSourceFiles = async ({ destination }) => {
  const destinationSourceFolder = path.join(destination, SOURCE_FOLDER);
  const filePaths = await globby(destinationSourceFolder, { dot: true });
  filePaths.forEach((filePath) => {
    const relativePath = filePath.split(SOURCE_FOLDER)[1];
    fse.moveSync(filePath, path.join(destination, relativePath));
  });
  fse.removeSync(path.join(destination, SOURCE_FILENAME));
  fse.removeSync(destinationSourceFolder);
};

export default moveSourceFiles;
