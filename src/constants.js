import path from 'path';

const SOURCE_URL = 'https://github.com/edx/front-end-cookie-cutter-application/archive/master.zip';
const TEMP_DIR = path.join(__dirname, '../tmp');
const SOURCE_FOLDER = path.join(TEMP_DIR, 'front-end-cookie-cutter-application-master');
const SOURCE_FILENAME = path.join(TEMP_DIR, 'master.zip');

export {
  SOURCE_URL,
  TEMP_DIR,
  SOURCE_FOLDER,
  SOURCE_FILENAME,
};
