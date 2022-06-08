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
  'storybook-addon-designs',
  'react-router-dom',
  'tailwindcss',
  'postcss',
  'autoprefixer',
  'flowbite',
];

const rootFileList = ['tailwind.config.js', 'postcss.config.js'];

console.log(`This will copy the compoentns to ${destinationRootpath}`);

function copyLibObjects() {
  try {
    fse.copySync(sourcePath, destinationPath);
    console.log('Copied successfully');
  } catch (err) {
    console.error(err);
  }
}

function injectDependencies() {
  const sourcePackageJsonObject = parse(fs.readFileSync(sourcePackageJsonPath, 'utf8'));
  console.log(sourcePackageJsonObject);
  const relatedDependencies = {};
  dependencyList.map((item) => {
    console.log(sourcePackageJsonObject.dependencies[item]);
    relatedDependencies[item] = sourcePackageJsonObject.dependencies[item];
  });

  console.log(relatedDependencies);

  const targetPackageJsonObject = parse(fs.readFileSync(targetPackageJsonPath).toString());
  assign(targetPackageJsonObject.dependencies, relatedDependencies);
  console.log(targetPackageJsonObject);
  fs.writeFileSync(targetPackageJsonPath, stringify(targetPackageJsonObject, null, 2));
}

// TODO: Combine inject dependency and devDependency
function injectDevDependencies() {
  const sourcePackageJsonObject = parse(fs.readFileSync(sourcePackageJsonPath, 'utf8'));
  console.log(sourcePackageJsonObject);
  const relatedDevDependencies = {};
  devDependencyList.map((item) => {
    console.log(sourcePackageJsonObject.devDependencies[item]);
    relatedDevDependencies[item] = sourcePackageJsonObject.devDependencies[item];
  });

  console.log(relatedDevDependencies);

  const targetPackageJsonObject = parse(fs.readFileSync(targetPackageJsonPath).toString());

  // assign dependency as empty object if not exist
  if (!targetPackageJsonObject.devDependencies) {
    targetPackageJsonObject.devDependencies = {};
  }

  assign(targetPackageJsonObject.devDependencies, relatedDevDependencies);
  console.log(targetPackageJsonObject);
  fs.writeFileSync(targetPackageJsonPath, stringify(targetPackageJsonObject, null, 2));
}

function copyProjectDependencyFiles() {
  rootFileList.map((item) => {
    fse.copySync(path.join(sourceRootPath, item), path.join(destinationRootpath, item));
  });
}

copyLibObjects();
injectDependencies();
injectDevDependencies();
copyProjectDependencyFiles();
