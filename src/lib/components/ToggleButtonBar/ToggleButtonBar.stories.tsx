import { Meta, Story } from '@storybook/react/types-6-0';
import { HiCheck } from 'react-icons/hi';

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

export const ToggleWithIcon = Template.bind({});
ToggleWithIcon.storyName = 'FullWidth';
ToggleWithIcon.args = {
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

export const ToggleIconOnly = Template.bind({});
ToggleIconOnly.storyName = 'Icon Only';
ToggleIconOnly.args = {
  children: [
    <ToggleButtonBar.Item key={1}>
      <HiCheck className={'inline-block h-6 w-6'} />
    </ToggleButtonBar.Item>,
    <ToggleButtonBar.Item key={2}>
      <HiCheck className={'inline-block h-6 w-6'} />
    </ToggleButtonBar.Item>,
    <ToggleButtonBar.Item key={3}>
      <HiCheck className={'inline-block h-6 w-6'} />
    </ToggleButtonBar.Item>,
    <ToggleButtonBar.Item key={4}>
      <HiCheck className={'inline-block h-6 w-6'} />
    </ToggleButtonBar.Item>,
    <ToggleButtonBar.Item key={5}>
      <HiCheck className={'inline-block h-6 w-6'} />
    </ToggleButtonBar.Item>,
  ],
};
