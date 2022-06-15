# DV Ditto
Easy custom built component for your project. Build web application even faster with components on top of React and Tailwind CSS

- [DV Ditto](#dv-ditto)
  - [Why DV Ditto?](#why-dv-ditto)
  - [Getting started](#getting-started)
    - [Setting up `dv-ditto` CLI](#setting-up-dv-ditto-cli)
    - [Use it on the project](#use-it-on-the-project)
    - [Running Storybook](#running-storybook)
  - [Customisation Guide](#customisation-guide)
    - [Customizing Color](#customizing-color)
    - [Customizing font](#customizing-font)
  - [Figma](#figma)

## Why DV Ditto?
DV Ditto is built to fill a specific use case for DV where we need a framework to build a design system quickly for each of our venture. It has been designed to be :
- **Versatile**
  
  Instead of importing the components, `ditto` copies the actual code into your repository that allows you to make changes and itterate faster compared to traditional third party components.
- **Customisable**
  
  Ditto focus on customisability enabled by [Tailwindcss](https://tailwindcss.com/). It allows engineers to customise a components as easy as changing class names. And every component codes are available to you.
- **Workflow focus**
  
  Ditto is developed together with the designers to make the workflow between designers and engineers a breeze. And we are commited that way.


## Getting started
DV Ditto is a command line tools that helps you to bootstrap your project. So before running the CLI tool on your project, you need to setup DV Ditto CLI.

The CLI will duplicate the components available in `dv-ditto` repository into your newly created/existing project. It will also inject related dependency into your `package.json`

(Guide to create Ditto as a separate repository will be coming soon)

### Setting up `dv-ditto` CLI

These steps will go thru the installation of `dv-ditto` CLI tool. For now, this tools only support project that is created using CRA typescript

1. To setup this, first you need to clone this project into your computer.
```Bash
git clone path-to-repository
```
2. Install the project dependencies
```Bash
npm install
```
3. Install the project as a global cli tools for npm
```Bash
npm install . -g
```
4. Verify the installation by typing
```Bash
which dv-ditto
```
5. It should show the executable path of `dv-ditto`


###  Use it on the project

Follow these steps to create a create react app and to bootstrap DV Ditto in your project

1. Create a new CRA project
    ```Bash
    npx create-react-app my-app --template typescript
    ```
2. Go into the newly created project folder
    ```Bash
    cd my-app
    ```
3. Run the `dv-ditto` cli to bootstrap the project
    ```Bash
    dv-ditto
    ```
4. Install all of the dependencies
    ```Bash
    npm install
    ```
5. Add `tailwind` and `dv-ditto` dependency in your css file into the bottom of the page. on `cra` project, this typically would be your `src/App.css` file
    ```css
    /* ... */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    /* Font that is used in Ditto */
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
    ``` 
6. To test the integration with the main app, lets make some changes into the main code. In `cra` this would be `App.tsx`
    ```tsx
    import { Button } from './lib';

    ...
    <Button>Welcome Ditto</Button>
    ...
    ```
7. Run the app, you should see a styled button appeared on the screen
    ```Bash
    npm run start
    ```

### Running Storybook
By default, you get a storybook when you use DV Ditto. This helps to quickly preview your changes in your components, test combinations of options, etc.

To test if the components are copied correctly, run storybook using this commands
```Bash
npm run start:storybook
```


## Customisation Guide
### Customizing Color
The main colors that Ditto used which is `primary`, `secondary` and `tertiary` are configured within `tailwind.config.js`
```javascript
  ...
  primary: {
    10: '#c2c2c2',
    20: '#a9a9a9',
    40: '#808080',
    60: '#696969',
    80: '#444444',
    100: '#000000',
  },
  ...
```
Changing these colors will automatically updates the related components that uses these color sets. It is advisable to change this color in the beginning of the project.
### Customizing font
To customise font, update the list on `tailwind.config.js`. Refer to the tailwind docs for more [here](https://tailwindcss.com/docs/font-family)
```javascript
  ...
  fontFamily: {
    sans: ['Lato', ...defaultTheme.fontFamily.sans],
  },
```
Then add the font dependency into the main css file. e.g: `App.css` for CRA
```css
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
```

## Figma

If you need the Figma files for the components, contact SIN XDs to get access to the Figma file
