#!/usr/bin/env node
const { Command } = require('commander');
const prompts = require('prompts');

const { presetOptions, presetList } = require('./constants');
const { getPreset, bootstrapProject } = require('./functions');

function promptFrameworks() {
  return prompts([
    {
      type: 'select',
      name: 'preset',
      message: 'Select framework preset',
      choices: Object.keys(presetOptions).map((item) => ({
        title: item,
        value: item,
      })),
    },
  ]);
}

const program = new Command();
program
  .name('dv-ditto')
  .description(
    'Ditto CLI is tool to bootstrap your project with Ditto design system. Find out more at https://ditto.bcgdv.io',
  )
  .version('0.0.1');

program
  .command('init')
  .description('Bootstrap a project with ditto framework')
  .option('-f, --framework <framework>', 'Main project framework', 'cra')
  .action(async (options) => {
    let framework = options.framework;
    if (!presetList.includes(framework)) {
      console.log('Preset not found');
      const response = await promptFrameworks();
      framework = response.preset;
    }
    console.log(`Bootstraping project based on ${framework} framework`);
    const preset = presetOptions[framework];
    bootstrapProject(process.cwd(), preset.targetLibPath);
  });

program.parse(process.argv);
