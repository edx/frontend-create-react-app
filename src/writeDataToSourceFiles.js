import fse from 'fs-extra';
import yaml from 'js-yaml';

const writeDataToSourceFiles = ({ files, destination, packageName }) => {
  files.forEach((fileName) => {
    const filePath = `${destination}/${fileName}`;
    let fileContents = fse.readFileSync(filePath, 'utf8');
    if (fileName === 'package.json') {
      fileContents = JSON.parse(fileContents);
      fileContents.name = packageName;
      fileContents.repository = `https://github.com/edx/${packageName}`;
      fileContents.version = '1.0.0';
      fse.writeFileSync(filePath, JSON.stringify(fileContents, null, 2), 'utf8');
    } else if (fileName === 'docker-compose.yml') {
      fileContents = yaml.safeLoad(fileContents);
      fileContents.services.web.container_name = packageName;
      fileContents.services.web.image = `edxops/${packageName}:latest`;
      fse.writeFileSync(filePath, yaml.safeDump(fileContents), 'utf8');
    }
  });
};

export default writeDataToSourceFiles;
