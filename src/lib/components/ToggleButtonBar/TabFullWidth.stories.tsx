import { Meta, Story } from '@storybook/react/types-6-0';

import { HiCheck } from 'react-icons/hi';

import { ToggleButtonBar, ToggleButtonBarComponentProps } from '.';

export default {
  title: '02. Components/Toggle Button Bar',
  component: ToggleButtonBar,
  argTypes: { onChange: { action: 'onChange' } },
} as Meta;

const Template: Story<ToggleButtonBarComponentProps> = (args) => <ToggleButtonBar {...args} />;

export const TabFullWidth = Template.bind({});
TabFullWidth.storyName = 'FullWidth';
TabFullWidth.args = {
  children: [
    <ToggleButtonBar.Item key={1}>
      <HiCheck className={'mr-2 inline-block h-6 w-6'} />
      Home
    </ToggleButtonBar.Item>,
    <ToggleButtonBar.Item key={2}>
      <HiCheck className={'mr-2 inline-block h-6 w-6'} />
      About
    </ToggleButtonBar.Item>,
    <ToggleButtonBar.Item key={3}>
      <HiCheck className={'mr-2 inline-block h-6 w-6'} />
      Services
    </ToggleButtonBar.Item>,
    <ToggleButtonBar.Item key={4}>
      <HiCheck className={'mr-2 inline-block h-6 w-6'} />
      Pricing
    </ToggleButtonBar.Item>,
    <ToggleButtonBar.Item key={5}>
      <HiCheck className={'mr-2 inline-block h-6 w-6'} />
      Contact
    </ToggleButtonBar.Item>,
  ],
};
