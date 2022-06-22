import { Meta, Story } from '@storybook/react/types-6-0';

import { TabGroup, TabComponentProps } from '.';

export default {
  title: '02. Components/Tabs',
  component: TabGroup,
} as Meta;

const Template: Story<TabComponentProps> = (args) => <TabGroup {...args} />;

export const DefaultTab = Template.bind({});
DefaultTab.storyName = 'Default';
DefaultTab.args = {
  children: [
    <TabGroup.Item key={1}>Home</TabGroup.Item>,
    <TabGroup.Item key={2}>About</TabGroup.Item>,
    <TabGroup.Item key={3}>Services</TabGroup.Item>,
    <TabGroup.Item key={4}>Pricing</TabGroup.Item>,
    <TabGroup.Item key={5}>Contact</TabGroup.Item>,
  ],
};
