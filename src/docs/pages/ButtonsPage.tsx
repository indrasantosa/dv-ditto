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
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="tertiary">Tertiary</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Gradient Monochrome',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button gradientMonochrome="blue">Blue</Button>
          <Button gradientMonochrome="green">Green</Button>
          <Button gradientMonochrome="cyan">Cyan</Button>
          <Button gradientMonochrome="teal">Teal</Button>
          <Button gradientMonochrome="lime">Lime</Button>
          <Button gradientMonochrome="red">Red</Button>
          <Button gradientMonochrome="pink">Pink</Button>
          <Button gradientMonochrome="purple">Purple</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Gradient duo-tone',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
          <Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
          <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
          <Button gradientDuoTone="purpleToPink">Purple to Pink</Button>
          <Button gradientDuoTone="pinkToOrange">Pink to Orange</Button>
          <Button gradientDuoTone="tealToLime">Teal to Lime</Button>
          <Button gradientDuoTone="redToYellow">Red to Yellow</Button>
        </div>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Outline',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Button outline gradientDuoTone="purpleToBlue">
            Purple to Blue
          </Button>
          <Button outline gradientDuoTone="cyanToBlue">
            Cyan to Blue
          </Button>
          <Button outline gradientDuoTone="greenToBlue">
            Green to Blue
          </Button>
          <Button outline gradientDuoTone="purpleToPink">
            Purple to Pink
          </Button>
          <Button outline gradientDuoTone="pinkToOrange">
            Pink to Orange
          </Button>
          <Button outline gradientDuoTone="tealToLime">
            Teal to Lime
          </Button>
          <Button outline gradientDuoTone="redToYellow">
            Red to Yellow
          </Button>
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
          <Button icon={HiOutlineArrowRight} outline />
          <Button icon={HiOutlineArrowRight} outline />
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
          <Button outline>
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
