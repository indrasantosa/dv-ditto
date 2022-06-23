import { Meta, Story } from '@storybook/react/types-6-0';

import { Snackbar, SnackbarProps } from '.';

export default {
  title: '02. Components/Snackbar',
  component: Snackbar,
} as Meta;

const Template: Story<SnackbarProps> = (args) => <Snackbar {...args} />;

export const DefaultSnackbar = Template.bind({});
DefaultSnackbar.storyName = 'Default';
DefaultSnackbar.args = {
  variant: 'default',
  onDismiss: undefined,
  children: <>Single-line-message.</>,
};

export const SnackbarWithClose = Template.bind({});
SnackbarWithClose.storyName = 'With close';
SnackbarWithClose.args = {
  variant: 'default',
  onDismiss: () => {
    alert('Snackbar closed');
  },
  children: <>Single-line-message.</>,
};

export const SnackbarWithIcons = Template.bind({});
SnackbarWithIcons.storyName = 'With icons';
SnackbarWithIcons.args = {
  variant: 'success',
  children: (
    <>
      More info about this info alert goes here. This example text is going to run a bit longer so that you can see how
      spacing within an alert works with this kind of content.
    </>
  ),
};

export const SnackbarWithCustomAction = Template.bind({});
SnackbarWithCustomAction.storyName = 'With custom action';
SnackbarWithCustomAction.args = {
  variant: 'success',
  actions: [
    <button key={'action1'} className="border-l border-functional-10 px-4">
      Save
    </button>,
    <button key={'action2'} className="border-l border-functional-10 px-4">
      Print
    </button>,
  ],
  children: (
    <>
      More info about this info alert goes here. This example text is going to run a bit longer so that you can see how
      spacing within an alert works with this kind of content.
    </>
  ),
};
