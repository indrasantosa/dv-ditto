import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { Button, ButtonComponentProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withDesign],
} as Meta;

const Template: Story<ButtonComponentProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.storyName = 'Default';
DefaultButton.args = {
  children: 'Button',
  color: 'primary',
  size: 'sm',
};

DefaultButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Wq4MDMgwh9N1xDXIsM0tx2/DS-LT?node-id=50765%3A6674',
  },
};
