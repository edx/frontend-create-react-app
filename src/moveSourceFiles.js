import fse from 'fs-extra';
import path from 'path';
import globby from 'globby';

import { getSource } from './getCookieCutterSource';

const moveSourceFiles = async ({ branchName, destination }) => {
  const source = getSource(branchName);
  const destinationSourceFolder = path.join(destination, source.folder);
  const filePaths = await globby(destinationSourceFolder, { dot: true });

  filePaths.forEach((filePath) => {
    const relativePath = filePath.split(source.folder)[1];
    fse.moveSync(filePath, path.join(destination, relativePath));
  });

  fse.removeSync(path.join(destination, source.fileName));
  fse.removeSync(destinationSourceFolder);
};

export default moveSourceFiles;
