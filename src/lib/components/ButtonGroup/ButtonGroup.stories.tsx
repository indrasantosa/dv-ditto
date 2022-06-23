import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '../Button';

import { ButtonGroupProps } from '.';

export default {
  title: '02. Components/Button Group',
  component: Button.Group,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => (
  <Button.Group {...args}>
    <Button buttonType="tertiary">Profile</Button>
    <Button buttonType="tertiary">Settings</Button>
    <Button buttonType="tertiary">Messages</Button>
  </Button.Group>
);

export const DefaultAvatarGroup = Template.bind({});
DefaultAvatarGroup.storyName = 'ButtonGroup';
DefaultAvatarGroup.args = {};
