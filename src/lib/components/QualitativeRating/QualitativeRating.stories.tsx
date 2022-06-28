import { Meta, Story } from '@storybook/react/types-6-0';
import { HiHeart } from 'react-icons/hi';

import QualitativeRating, { QualitativeRatingProps } from '.';

export default {
  title: '02. Components/QualitativeRating',
  component: QualitativeRating,
  argTypes: { onChange: { action: 'onChange' } },
} as Meta;

const Template: Story<QualitativeRatingProps> = (args) => <QualitativeRating {...args} />;

export const DefaultRating = Template.bind({});
DefaultRating.storyName = 'Default';
DefaultRating.args = {};

export const WithSelectedValue = Template.bind({});
WithSelectedValue.storyName = 'Selected Value';
WithSelectedValue.args = {
  value: 3,
};

export const CustomRatingIcon = Template.bind({});
CustomRatingIcon.storyName = 'Custom Rating';
CustomRatingIcon.args = {
  children: [
    <div key={0}>1</div>,
    <div key={1}>2</div>,
    <div key={2}>3</div>,
    <div key={3}>4</div>,
    <div key={4}>5</div>,
    <div key={5}>6</div>,
    <div key={6}>7</div>,
    <div key={7}>8</div>,
    <div key={8}>9</div>,
    <div key={9}>10</div>,
  ],
  classNames: {
    base: /*tw*/ 'flex h-10 w-10 items-center justify-center border-y border-l first:border-l last:border-r first:rounded-l-md last:rounded-r-md border-border-border4 duration-150',
    default: /*tw*/ 'hover:bg-primary-50 hover:text-background-white',
    active: /*tw*/ 'bg-primary-100 text-background-white hover:bg-primary-125',
  },
  className: 'gap-0',
};

const iconList = [
  <svg key={0} width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="23" cy="22.5" r="21.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="18.5" r="2.5" fill="currentColor" />
    <circle cx="31" cy="18.5" r="2.5" fill="currentColor" />
    <path
      d="M14.544 33C14.9985 27.8732 18.911 24 23.5 24C28.089 24 32.0015 27.8732 32.456 33L30.5711 33L23.5 33L16.4289 33L14.544 33Z"
      fill="currentColor"
      strokeWidth="2"
    />
  </svg>,
  <svg key={1} width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="23" cy="22.5" r="21.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="18.5" r="2.5" fill="currentColor" />
    <circle cx="31" cy="18.5" r="2.5" fill="currentColor" />
    <path
      d="M18.5 30C18.5 26.6863 20.7386 24 23.5 24C26.2614 24 28.5 26.6863 28.5 30"
      fill="currentColor"
      strokeWidth="2"
    />
  </svg>,
  <svg key={2} width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="23" cy="22.5" r="21.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="18.5" r="2.5" fill="currentColor" />
    <circle cx="31" cy="18.5" r="2.5" fill="currentColor" />
    <path d="M18.5 27L23.5 27L28.5 27" stroke="currentColor" strokeWidth="2" />
  </svg>,
  <svg key={3} width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="23" cy="22.5" r="21.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="18.5" r="2.5" fill="currentColor" />
    <circle cx="31" cy="18.5" r="2.5" fill="currentColor" />
    <path
      d="M28.5 24C28.5 27.3137 26.2614 30 23.5 30C20.7386 30 18.5 27.3137 18.5 24"
      fill="currentColor"
      strokeWidth="2"
    />
  </svg>,
  <svg key={4} width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="23" cy="22.5" r="21.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="16" cy="18.5" r="2.5" fill="currentColor" />
    <circle cx="31" cy="18.5" r="2.5" fill="currentColor" />
    <path
      d="M32.456 25C32.0015 30.1268 28.089 34 23.5 34C18.911 34 14.9985 30.1268 14.544 25L16.4289 25L23.5 25L30.5711 25L32.456 25Z"
      fill="currentColor"
      strokeWidth="2"
    />
  </svg>,
];

export const EmojiRating = Template.bind({});
EmojiRating.storyName = 'Emoji Rating';
EmojiRating.args = {
  children: iconList.map((item, index) => <span key={index}>{item}</span>),
  value: 2,
  classNames: {
    base: /*tw*/ 'flex h-10 w-10 items-center justify-center duration-150',
    default: /*tw*/ 'text-state-disabled hover:text-primary-50',
    active: /*tw*/ 'text-primary-100 hover:text-primary-125',
  },
  className: 'gap-8',
};
