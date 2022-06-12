import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from '../Button';

import { ButtonGroupProps } from '.';

export default {
  title: '02. Components/Button Group',
  component: Button.Group,
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => (
  <Button.Group {...args}>
    <Button color="tertiary">Profile</Button>
    <Button color="tertiary">Settings</Button>
    <Button color="tertiary">Messages</Button>
  </Button.Group>
);

export const DefaultAvatarGroup = Template.bind({});
DefaultAvatarGroup.storyName = 'ButtonGroup';
DefaultAvatarGroup.args = {};
