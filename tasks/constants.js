const path = require('path');

// Ditto paths
const sourceRootPath = path.join(__dirname, '..');
const sourcePath = path.join(sourceRootPath, 'src', 'lib');
const sourcePackageJsonPath = path.join(sourceRootPath, 'package.json');

// Project paths
const destinationRootpath = process.cwd();
const destinationPath = path.join(destinationRootpath, 'src', 'lib');
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

const scriptsToInject = {
  'start:storybook': 'start-storybook -p 6006',
  'build:storybook': 'build-storybook -o build/storybook',
};

const rootFileList = ['tailwind.config.js', 'postcss.config.js'];

const presetOptions = {
  cra: {
    targetLibPath: './src/lib',
    targetCssFile: './src/App.css',
    packageJsonFile: './package.json',
  },
  nextjs: {
    targetLibPath: './components/ditto',
    targetCssFile: './styles/globals.css',
    packageJsonFile: './package.json',
  },
  gatsby: {
    targetLibPath: './src/lib',
    targetCssFile: './src/App.css',
    packageJsonFile: './package.json',
  },
};
const presetList = Object.keys(presetOptions);

module.exports = {
  destinationRootpath,
  destinationPath,
  sourceRootPath,
  sourcePath,
  sourcePackageJsonPath,
  targetPackageJsonPath,
  dependencyList,
  devDependencyList,
  scriptsToInject,
  rootFileList,
  presetOptions,
  presetList,
};
