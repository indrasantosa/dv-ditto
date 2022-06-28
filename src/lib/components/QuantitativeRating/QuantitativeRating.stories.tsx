import { Meta, Story } from '@storybook/react/types-6-0';
import { HiHeart } from 'react-icons/hi';

import QuantitativeRating, { QuantitativeRatingProps } from '.';

export default {
  title: '02. Components/QuantitativeRating',
  component: QuantitativeRating,
  argTypes: { onChange: { action: 'onChange' } },
} as Meta;

const Template: Story<QuantitativeRatingProps> = (args) => <QuantitativeRating {...args} />;

export const DefaultRating = Template.bind({});
DefaultRating.storyName = 'Default';
DefaultRating.args = {
  precision: 0.5,
};

export const WithSelectedValue = Template.bind({});
WithSelectedValue.storyName = 'Selected Value';
WithSelectedValue.args = {
  value: 2.5,
  precision: 0.5,
};

export const CustomRatingIcon = Template.bind({});
CustomRatingIcon.storyName = 'Custom Rating';
CustomRatingIcon.args = {
  IconComponent: HiHeart,
  precision: 0.5,
  max: 10,
  size: 'lg',
};
