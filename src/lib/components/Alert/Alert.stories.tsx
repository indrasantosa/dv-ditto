import { Meta, Story } from '@storybook/react/types-6-0';

import { Alert, AlertProps } from '.';

export default {
  title: '02. Components/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const DefaultAlert = Template.bind({});
DefaultAlert.storyName = 'Default';
DefaultAlert.args = {
  children: (
    <>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minima rerum veritatis optio atque impedit, enim
      quisquam, excepturi consectetur quaerat odio hic, natus aspernatur ex architecto quas dolor nemo alias.
    </>
  ),
};

export const AlertWithIcons = Template.bind({});
AlertWithIcons.storyName = 'Alert with icons';
AlertWithIcons.args = {
  children: (
    <>
      More info about this info alert goes here. This example text is going to run a bit longer so that you can see how
      spacing within an alert works with this kind of content.
    </>
  ),
};

export const AlertDismissible = Template.bind({});
AlertDismissible.storyName = 'Dismissible alert';
AlertDismissible.args = {
  variant: 'error',
  onDismiss: function onDismiss() {
    return alert('Alert dismissed!');
  },
  children: <>Info alert! Change a few things up and try submitting again.</>,
};
