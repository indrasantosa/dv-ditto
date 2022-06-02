#!/usr/bin/env node
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const { parse, stringify, assign } = require('comment-json');

const libPath = path.join(__dirname, '..', 'src', 'lib');
const currentPath = process.cwd();
const destinationPath = path.join(currentPath, 'src', 'lib');
const sourceRootPath = path.join(__dirname, '..');
const sourcePath = path.join(sourceRootPath, 'src', 'lib');
const sourcePackageJsonPath = path.join(sourceRootPath, 'package.json');
const targetPackageJsonPath = path.join(currentPath, 'package.json');

const dependencyList = [
  '@floating-ui/react-dom',
  '@floating-ui/react-dom-interactions',
  'classnames',
  'react-icons',
  'react-indiana-drag-scroll',
];

console.log(`This will copy the compoentns to ${currentPath}`);

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
}

injectDependencies();
