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
    url: 'https://www.figma.com/file/MZbp0TRdMmGRSBlv6DDMdz/DV-Design-System?node-id=45%3A3043',
  },
};
