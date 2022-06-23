import { FC } from 'react';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';

import { Button, Spinner } from '../../lib';
import { CodeExample, DemoPage } from './DemoPage';

const ButtonsPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default button',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button>Default</Button>
          <Button buttonType="primary">Primary</Button>
          <Button buttonType="secondary">Secondary</Button>
          <Button buttonType="tertiary">Tertiary</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Gradient Monochrome',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button>Blue</Button>
          <Button>Green</Button>
          <Button>Cyan</Button>
          <Button>Teal</Button>
          <Button>Lime</Button>
          <Button>Red</Button>
          <Button>Pink</Button>
          <Button>Purple</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Gradient duo-tone',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button>Purple to Blue</Button>
          <Button>Cyan to Blue</Button>
          <Button>Green to Blue</Button>
          <Button>Purple to Pink</Button>
          <Button>Pink to Orange</Button>
          <Button>Teal to Lime</Button>
          <Button>Red to Yellow</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Outline',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button>Purple to Blue</Button>
          <Button>Cyan to Blue</Button>
          <Button>Green to Blue</Button>
          <Button>Purple to Pink</Button>
          <Button>Pink to Orange</Button>
          <Button>Teal to Lime</Button>
          <Button>Red to Yellow</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button sizes',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm">Small</Button>
          <Button size="md">Base</Button>
          <Button size="lg">Large</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Buttons with icon',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button>
            <HiShoppingCart className="mr-2 h-5 w-5" />
            Buy now
          </Button>
          <Button>
            Choose plan
            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Button with label',
      code: <Button label="2">Messages</Button>,
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Icon buttons',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button icon={HiOutlineArrowRight} />
          <Button icon={HiOutlineArrowRight} />
          <Button icon={HiOutlineArrowRight} />
          <Button icon={HiOutlineArrowRight} />
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Loader',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button>
            <Spinner className="mr-3" size="sm" light />
            Loading ...
          </Button>
          <Button>
            <Spinner className="mr-3" size="sm" light />
            Loading ...
          </Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Disabled',
      code: <Button disabled>Disabled button</Button>,
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ButtonsPage;
