import path from 'path';

import writeTemplateDirectoryFiles from './writeTemplateDirectoryFiles';

const writeBaseTemplates = async ({ destination, templateValues }) =>
  writeTemplateDirectoryFiles({
    destination,
    templateValues,
    location: path.join(__dirname, '../templates'),
  });

export default writeBaseTemplates;
