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

function appendTailwindCssBootstrap(cssDestinationPath) {
  const textToAppend = `
@tailwind base;
@tailwind components;
@tailwind utilities;
  `;
  fs.appendFileSync(cssDestinationPath, textToAppend);
  console.log(`Appended tailwind css bootstrap to ${chalk.green(cssDestinationPath)}`);
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

function bootstrapProject(destinationRootPath, relativeLibDestinationPath, targetCssFile) {
  const destinationPath = path.join(destinationRootPath, relativeLibDestinationPath);
  const targetPackageJsonPath = path.join(destinationRootPath, 'package.json');

  copyLibObjects(destinationPath);
  injectDependencies(targetPackageJsonPath);
  injectDevDependencies(targetPackageJsonPath);
  addPackageScripts(targetPackageJsonPath);
  copyProjectDependencyFiles(destinationRootPath);
  copyStorybookDir(destinationRootPath);
  appendTailwindCssBootstrap(targetCssFile);

  console.log(`

  ⠀⠀⠀⢠⡜⠛⠛⠿⣤⠀⠀⣤⡼⠿⠿⢧⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⣀⡶⠎⠁⠀⠀⠀⠉⠶⠶⠉⠁⠀⠀⠈⠹⢆⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⣀⡿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠶⠶⠶⠶⣆⡀⠀⠀⠀⠀
  ⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢣⡄⠀⠀⠀
  ⠛⣧⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀
  ⠀⠛⣧⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⠀⠀⠀⠀⢠⡼⠃⠀⠀
  ⠀⠀⠿⢇⡀⠀⠀⠀⠀⠀⠀⠀⠰⠶⠶⢆⣀⣀⣀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀
  ⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀
  ⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀
  ⠀⠀⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢣⣤
  ⠀⣶⡏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿
  ⠀⠿⣇⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣀⠀⠀⠀⠀⢀⣀⣸⠿
  ⠀⠀⠙⢳⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⡞⠛⠛⠛⠛⠛⠛⣶⣶⣶⣶⡞⠛⠃⠀

${chalk.hex('#b876b3').bold('Ditto has been bootstraped to your project!')}
  `);

  console.log(`
${chalk.red('For non CRA project! Please update tailwind.config.js according to your project setup.')}
${chalk.red('Refer to example here https://tailwindcss.com/docs/guides/nextjs on step 3.')}

Run following command to install the dependencies:

  ${chalk.green('npm install')}

And then run following command to start the development server:

  ${chalk.green('npm run dev')}

You can also run following command to run the storybook server:

  ${chalk.green('npm run start:storybook')}

Reach us out on #sg-design-system channel for help and feedback.

${chalk.hex('#b876b3').bold('Happy building!')}
  `);
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
