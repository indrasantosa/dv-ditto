const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

const { parse, stringify, assign } = require('comment-json');

const {
  sourcePackageJsonPath,
  sourcePath,
  dependencyList,
  devDependencyList,
  scriptsToInject,
  rootFileList,
  presetList,
  presetOptions,
  sourceRootPath,
} = require('./constants');

function copyLibObjects(destinationPath) {
  console.log(`Copying lib objects to ${chalk.green(destinationPath)}`);
  try {
    fse.copySync(sourcePath, destinationPath);
  } catch (err) {
    console.error(err);
  }
}

function injectDependencies(targetPackageJsonPath) {
  console.log(`Injecting dependencies to ${chalk.green(targetPackageJsonPath)}`);

  const sourcePackageJsonObject = parse(fs.readFileSync(sourcePackageJsonPath, 'utf8'));
  const relatedDependencies = {};
  dependencyList.map((item) => {
    relatedDependencies[item] = sourcePackageJsonObject.dependencies[item];
  });

  const targetPackageJsonObject = parse(fs.readFileSync(targetPackageJsonPath).toString());
  assign(targetPackageJsonObject.dependencies, relatedDependencies);
  fs.writeFileSync(targetPackageJsonPath, stringify(targetPackageJsonObject, null, 2));
}

// TODO: Combine inject dependency and devDependency
function injectDevDependencies(targetPackageJsonPath) {
  console.log(`Injecting devDependencies to ${chalk.green(targetPackageJsonPath)}`);
  const sourcePackageJsonObject = parse(fs.readFileSync(sourcePackageJsonPath, 'utf8'));
  const relatedDevDependencies = {};
  devDependencyList.map((item) => {
    relatedDevDependencies[item] = sourcePackageJsonObject.devDependencies[item];
  });

  const targetPackageJsonObject = parse(fs.readFileSync(targetPackageJsonPath).toString());

  // assign dependency as empty object if not exist
  if (!targetPackageJsonObject.devDependencies) {
    targetPackageJsonObject.devDependencies = {};
  }

  assign(targetPackageJsonObject.devDependencies, relatedDevDependencies);
  fs.writeFileSync(targetPackageJsonPath, stringify(targetPackageJsonObject, null, 2));
}

function copyProjectDependencyFiles(destinationRootPath) {
  console.log(`Copying project dependency files to ${chalk.green(destinationRootPath)}`);

  rootFileList.map((item) => {
    fse.copySync(path.join(sourceRootPath, item), path.join(destinationRootPath, item));
  });
}

function copyStorybookDir(destinationRootPath) {
  console.log(`Copying storybook dir to ${chalk.green(destinationRootPath)}`);
  fse.copySync(path.join(sourceRootPath, '.storybook'), path.join(destinationRootPath, '.storybook'));
  fse.copySync(path.join(sourceRootPath, './src/stories'), path.join(destinationRootPath, './src/stories'));
}

function addPackageScripts(targetPackageJsonPath) {
  console.log(`Injecting scripts to ${chalk.green(targetPackageJsonPath)}`);

  const targetPackageJsonObject = parse(fs.readFileSync(targetPackageJsonPath).toString());
  assign(targetPackageJsonObject.scripts, scriptsToInject);
  fs.writeFileSync(targetPackageJsonPath, stringify(targetPackageJsonObject, null, 2));
}

function bootstrapProject(destinationRootPath, relativeLibDestinationPath) {
  const destinationPath = path.join(destinationRootPath, relativeLibDestinationPath);
  const targetPackageJsonPath = path.join(destinationRootPath, 'package.json');

  copyLibObjects(destinationPath);
  injectDependencies(targetPackageJsonPath);
  injectDevDependencies(targetPackageJsonPath);
  addPackageScripts(targetPackageJsonPath);
  copyProjectDependencyFiles(destinationRootPath);
  copyStorybookDir(destinationRootPath);
  console.log(chalk.hex('#b876b3').bold('Ditto has been installed successfully!'));
}

function getPreset(presetname) {
  if (typeof presetname !== 'string') {
    return null;
  }
  return presetList.includes(presetname) ? presetOptions[presetname] : null;
}

module.exports = {
  getPreset,
  bootstrapProject,
};
