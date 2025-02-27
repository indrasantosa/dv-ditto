import { Meta, Story } from '@storybook/react/types-6-0';

import { Select, SelectProps } from './Select';

export default {
  title: '02. Components/FormControls',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const DefaultSelect = Template.bind({});
DefaultSelect.storyName = 'Select';
DefaultSelect.args = {
  id: 'countries',
  children: (
    <>
      <option>United States</option>
      <option>Canada</option>
      <option>France</option>
      <option>Germany</option>
    </>
  ),
};
