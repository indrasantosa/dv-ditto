import { Meta, Story } from '@storybook/react/types-6-0';
import { HiCheck } from 'react-icons/hi';

import { Badge, BadgeProps } from '.';

export default {
  title: '02. Components/Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = (args) => (
  <div className="flex items-center">
    <Badge {...args} />
  </div>
);

export const DefaultBadge = Template.bind({});
DefaultBadge.storyName = 'Default';
DefaultBadge.args = {
  children: 'Default',
};

export const BadgeWithIcon = Template.bind({});
BadgeWithIcon.storyName = 'Badge with icon';
BadgeWithIcon.args = {
  color: 'indigo',
  icon: HiCheck,
  children: '2 minutes ago',
};

export const BadgeOnlyIcon = Template.bind({});
BadgeOnlyIcon.storyName = 'Badge only icon';
BadgeOnlyIcon.args = {
  color: 'green',
  icon: HiCheck,
};
