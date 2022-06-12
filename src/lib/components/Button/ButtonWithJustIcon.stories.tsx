import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import { BiCheck } from 'react-icons/bi';

import { Button, ButtonComponentProps } from '.';

export default {
  title: '02. Components/Button',
  component: Button,
  decorators: [withDesign],
} as Meta;

const Template: Story<ButtonComponentProps> = (args) => <Button className="!w-24" {...args} />;

export const ButtonWithJustIcon = Template.bind({});
ButtonWithJustIcon.storyName = 'With Just Icon';
ButtonWithJustIcon.args = {
  color: 'primary',
  size: 'sm',
  icon: BiCheck,
};

ButtonWithJustIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Wq4MDMgwh9N1xDXIsM0tx2/DS-LT?node-id=50763%3A5035',
  },
};
