import { Meta, Story } from '@storybook/react/types-6-0';

import { Checkbox, CheckboxProps } from './Checkbox';

export default {
  title: '02. Components/FormControls',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.storyName = 'Checkbox';
DefaultCheckbox.args = {};

DefaultCheckbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/cneAdsZ0oyaJmzoTqzedEV/Ditto-Design-System-(SIN-XD)?node-id=235%3A24937',
  },
};
