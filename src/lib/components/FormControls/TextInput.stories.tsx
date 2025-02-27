import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import { BiBuoy } from 'react-icons/bi';

import { TextInput, TextInputProps } from './TextInput';

export default {
  title: '02. Components/FormControls/TextInput',
  component: TextInput,
  decorators: [withDesign],
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const DefaultTextInput = Template.bind({});
DefaultTextInput.storyName = 'Default';
DefaultTextInput.args = {
  placeholder: 'placeholder text',
  icon: BiBuoy,
};

DefaultTextInput.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/cneAdsZ0oyaJmzoTqzedEV/Ditto-Design-System-(SIN-XD)?node-id=50667%3A5417',
  },
};
