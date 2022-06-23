import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';

import { TextInput, TextInputProps } from './TextInput';

export default {
  title: '02. Components/FormControls/TextInput',
  component: TextInput,
  decorators: [withDesign],
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const TextInputWithAddons = Template.bind({});
TextInputWithAddons.storyName = 'WithAddons';
TextInputWithAddons.args = {
  placeholder: 'placeholder text',
  addon: '$',
  postAddon: '00',
};

TextInputWithAddons.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/cneAdsZ0oyaJmzoTqzedEV/Ditto-Design-System-(SIN-XD)?node-id=50667%3A5417',
  },
};
