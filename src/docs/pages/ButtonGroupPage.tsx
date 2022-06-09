import { FC } from 'react';
import { HiAdjustments, HiCloudDownload, HiUserCircle } from 'react-icons/hi';

import { CodeExample, DemoPage } from './DemoPage';
import { Button } from '../../lib';

const ButtonGroupPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default example',
      code: (
        <Button.Group>
          <Button color="tertiary">Profile</Button>
          <Button color="tertiary">Settings</Button>
          <Button color="tertiary">Messages</Button>
        </Button.Group>
      ),
    },
    {
      title: 'Group buttons with icons',
      code: (
        <Button.Group>
          <Button color="tertiary">
            <HiUserCircle className="mr-3 h-4 w-4" /> Profile
          </Button>
          <Button color="tertiary">
            <HiAdjustments className="mr-3 h-4 w-4" /> Settings
          </Button>
          <Button color="tertiary">
            <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
          </Button>
        </Button.Group>
      ),
    },
    {
      title: 'All colors',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button.Group>
            <Button color="primary">Profile</Button>
            <Button color="primary">Settings</Button>
            <Button color="primary">Messages</Button>
          </Button.Group>
          <Button.Group>
            <Button>Profile</Button>
            <Button>Settings</Button>
            <Button>Messages</Button>
          </Button.Group>
          <Button.Group>
            <Button>Profile</Button>
            <Button>Settings</Button>
            <Button>Messages</Button>
          </Button.Group>
        </div>
      ),
    },
    {
      title: 'Outline',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button.Group outline>
            <Button color="tertiary">Profile</Button>
            <Button color="tertiary">Settings</Button>
            <Button color="tertiary">Messages</Button>
          </Button.Group>
          <Button.Group outline>
            <Button>Profile</Button>
            <Button>Settings</Button>
            <Button>Messages</Button>
          </Button.Group>
          <Button.Group outline>
            <Button>Profile</Button>
            <Button>Settings</Button>
            <Button>Messages</Button>
          </Button.Group>
        </div>
      ),
    },
    {
      title: 'Outline with icons',
      code: (
        <div className="flex flex-wrap gap-2">
          <Button.Group outline>
            <Button color="tertiary">
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button color="tertiary">
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button color="tertiary">
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </Button.Group>
          <Button.Group outline>
            <Button>
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button>
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button>
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </Button.Group>
          <Button.Group outline>
            <Button>
              <HiUserCircle className="mr-3 h-4 w-4" /> Profile
            </Button>
            <Button>
              <HiAdjustments className="mr-3 h-4 w-4" /> Settings
            </Button>
            <Button>
              <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
            </Button>
          </Button.Group>
        </div>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ButtonGroupPage;
