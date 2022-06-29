import { Meta, Story } from '@storybook/react/types-6-0';

import { ToggleButtonBar, ToggleButtonBarComponentProps } from '.';

export default {
  title: '02. Components/Toggle Button Bar',
  component: ToggleButtonBar,
} as Meta;

const Template: Story<ToggleButtonBarComponentProps> = (args) => <ToggleButtonBar {...args} />;

export const ToggleButtonBarDefault = Template.bind({});
ToggleButtonBarDefault.storyName = 'Default';
ToggleButtonBarDefault.args = {
  children: [
    <ToggleButtonBar.Item key={1}>Home</ToggleButtonBar.Item>,
    <ToggleButtonBar.Item key={2}>About</ToggleButtonBar.Item>,
    <ToggleButtonBar.Item key={3}>Services</ToggleButtonBar.Item>,
    <ToggleButtonBar.Item key={4}>Pricing</ToggleButtonBar.Item>,
    <ToggleButtonBar.Item key={5}>Contact</ToggleButtonBar.Item>,
  ],
};
