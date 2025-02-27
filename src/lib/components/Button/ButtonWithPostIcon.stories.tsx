import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import { BiBitcoin } from 'react-icons/bi';

import { Button, ButtonComponentProps } from '.';

export default {
  title: '02. Components/Button',
  component: Button,
  decorators: [withDesign],
} as Meta;

const Template: Story<ButtonComponentProps> = (args) => <Button {...args} />;

export const ButtonWithPostIcon = Template.bind({});
ButtonWithPostIcon.storyName = 'With Post-Icon';
ButtonWithPostIcon.args = {
  children: (
    <>
      Bitcoin
      <BiBitcoin className="ml-2 h-5 w-5" />
    </>
  ),
  buttonType: 'primary',
  size: 'sm',
};

ButtonWithPostIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Wq4MDMgwh9N1xDXIsM0tx2/DS-LT?node-id=50763%3A5035',
  },
};
