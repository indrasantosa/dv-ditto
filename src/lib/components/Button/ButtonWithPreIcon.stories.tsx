import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import { BiBitcoin } from 'react-icons/bi';

import { Button, ButtonComponentProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withDesign],
} as Meta;

const Template: Story<ButtonComponentProps> = (args) => <Button {...args} />;

export const ButtonWithPreIcon = Template.bind({});
ButtonWithPreIcon.storyName = 'With Pre-Icon';
ButtonWithPreIcon.args = {
  children: (
    <>
      <BiBitcoin className="mr-2 h-5 w-5" />
      Bitcoin
    </>
  ),
  color: 'primary',
  size: 'sm',
};

ButtonWithPreIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Wq4MDMgwh9N1xDXIsM0tx2/DS-LT?node-id=50763%3A5035',
  },
};
