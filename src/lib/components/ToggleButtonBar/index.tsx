import { FC, PropsWithChildren, Children, isValidElement, cloneElement, useState } from 'react';
import classNames from 'classnames';
import { ToggleButtonItem } from './ToggleButtonItem';

export type ToggleButtonBarComponentProps = PropsWithChildren<{
  className?: string;
  fluid?: boolean;
  onChange?: (index: number) => void;
}>;

const ToggleButtonBarComponent: FC<ToggleButtonBarComponentProps> = ({ children, className, fluid, onChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const childrenWithProps = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        onPress: () => {
          setActiveTab(index);
          onChange && onChange(index);
        },
        active: index === activeTab,
      });
    }
    return child;
  });
  return (
    <nav className={classNames(className, 'bg-white')}>
      <div className={classNames('flex flex-wrap items-center justify-between')}>
        <div className={'flex-1'}>
          <ul className="mt-4 flex flex-row md:mt-0 md:text-sm md:font-medium">{childrenWithProps}</ul>
        </div>
      </div>
    </nav>
  );
};

ToggleButtonBarComponent.displayName = 'ToggleButtonBar.Group';
ToggleButtonItem.displayName = 'ToggleButtonBar.Item';

export const ToggleButtonBar = Object.assign(ToggleButtonBarComponent, {
  Item: ToggleButtonItem,
});
