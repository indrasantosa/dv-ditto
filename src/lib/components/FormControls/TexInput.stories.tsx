import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import { BiBuoy } from 'react-icons/bi';

import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'Components/FormControls',
  component: TextInput,
  decorators: [withDesign],
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const DefaultTextInput = Template.bind({});
DefaultTextInput.storyName = 'TextInput';
DefaultTextInput.args = {
  placeholder: 'placeholder text',
  icon: BiBuoy,
};

DefaultTextInput.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Wq4MDMgwh9N1xDXIsM0tx2/DS-LT?node-id=50667%3A5417',
  },
};
