import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import { BiCheck } from 'react-icons/bi';

import { TextInput, TextInputProps } from './TextInput';

export default {
  title: '02. Components/FormControls/TextInput',
  component: TextInput,
  decorators: [withDesign],
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const TextInputWithSuccessValidation = Template.bind({});
TextInputWithSuccessValidation.storyName = 'WithSuccessValidation';
TextInputWithSuccessValidation.args = {
  label: 'Label',
  placeholder: 'placeholder text',
  postAddon: <BiCheck className="h-6 w-6 text-state-success" />,
  helperText: (
    <span className="text-xs text-state-success">
      <BiCheck className="inline-block h-4 w-4 text-state-success" />
      Success Text
    </span>
  ),
};

TextInputWithSuccessValidation.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/cneAdsZ0oyaJmzoTqzedEV/Ditto-Design-System-(SIN-XD)?node-id=50667%3A5417',
  },
};
