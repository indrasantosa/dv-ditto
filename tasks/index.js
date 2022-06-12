#!/usr/bin/env node
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const { parse, stringify, assign } = require('comment-json');

const destinationRootpath = process.cwd();
const destinationPath = path.join(destinationRootpath, 'src', 'lib');
const sourceRootPath = path.join(__dirname, '..');
const sourcePath = path.join(sourceRootPath, 'src', 'lib');
const sourcePackageJsonPath = path.join(sourceRootPath, 'package.json');
const targetPackageJsonPath = path.join(destinationRootpath, 'package.json');

const dependencyList = [
  '@floating-ui/react-dom',
  '@floating-ui/react-dom-interactions',
  'classnames',
  'react-icons',
  'react-indiana-drag-scroll',
];

const devDependencyList = [
  '@storybook/react',
  '@storybook/addon-links',
  '@storybook/addon-essentials',
  '@storybook/addon-interactions',
  '@storybook/builder-webpack5',
  '@storybook/manager-webpack5',
  'storybook-dark-mode',
  '@storybook/addon-a11y',
  '@storybook/addon-postcss',
  'storybook-addon-designs',
  'storybook-addon-designs',
  'react-router-dom',
  'tailwindcss',
  'postcss',
  'autoprefixer',
  'flowbite',
];

const scriptsToIject = {
  'start:storybook': 'start-storybook -p 6006',
  'build:storybook': 'build-storybook -o build/storybook',
};

const rootFileList = ['tailwind.config.js', 'postcss.config.js'];

function copyLibObjects() {
  try {
    fse.copySync(sourcePath, destinationPath);
  } catch (err) {
    console.error(err);
  }
}

function injectDependencies() {
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
function injectDevDependencies() {
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

function copyProjectDependencyFiles() {
  rootFileList.map((item) => {
    fse.copySync(path.join(sourceRootPath, item), path.join(destinationRootpath, item));
  });
}

function copyStorybookDir() {
  fse.copySync(path.join(sourceRootPath, '.storybook'), path.join(destinationRootpath, '.storybook'));
  fse.copySync(path.join(sourceRootPath, './src/stories'), path.join(destinationRootpath, './src/stories'));
}

function addPackageScripts() {
  const targetPackageJsonObject = parse(fs.readFileSync(targetPackageJsonPath).toString());
  assign(targetPackageJsonObject.scripts, scriptsToIject);
  fs.writeFileSync(targetPackageJsonPath, stringify(targetPackageJsonObject, null, 2));
}

copyLibObjects();
injectDependencies();
injectDevDependencies();
addPackageScripts();
copyProjectDependencyFiles();
copyStorybookDir();
