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
};

DefaultButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/U3v0je4no1JpE8sCud1pPZ/Flowbite-Pro-v2.1.0?node-id=2542%3A21012',
  },
};
