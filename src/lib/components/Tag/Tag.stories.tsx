import { Meta, Story } from '@storybook/react/types-6-0';
import { withDesign } from 'storybook-addon-designs';
import { HiCheck } from 'react-icons/hi';

import { Tag, TagProps } from '.';

export default {
  title: '02. Components/Tag',
  component: Tag,
  decorators: [withDesign],
} as Meta;

const Template: Story<TagProps> = (args) => (
  <div className="flex items-center">
    <Tag {...args} />
  </div>
);

export const DefaultTag = Template.bind({});
DefaultTag.storyName = 'Default';
DefaultTag.args = {
  size: 'sm',
  children: 'Default',
};
DefaultTag.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/cneAdsZ0oyaJmzoTqzedEV/Ditto-Design-System-(SIN-XD)?node-id=51005%3A17102',
  },
};

export const TagWithIcon = Template.bind({});
TagWithIcon.storyName = 'Tag with icon';
TagWithIcon.args = {
  type: 'category1',
  icon: HiCheck,
  size: 'sm',
  children: '2 minutes ago',
};
TagWithIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/cneAdsZ0oyaJmzoTqzedEV/Ditto-Design-System-(SIN-XD)?node-id=51005%3A17102',
  },
};
