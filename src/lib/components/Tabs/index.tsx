import { FC, PropsWithChildren, Children, isValidElement, cloneElement, useState } from 'react';
import classNames from 'classnames';
import { TabItem } from './TabItem';

export type TabComponentProps = PropsWithChildren<{
  className?: string;
  fluid?: boolean;
  rounded?: boolean;
  border?: boolean;
}>;

const TabComponent: FC<TabComponentProps> = ({ children, className, fluid, rounded, border }) => {
  const [activeTab, setActiveTab] = useState(0);

  const childrenWithProps = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        onPress: () => setActiveTab(index),
        active: index === activeTab,
      });
    }
    return child;
  });
  return (
    <nav
      className={classNames(className, 'bg-white', {
        rounded: rounded,
        border: border,
      })}
    >
      <div className={classNames('flex flex-wrap items-center justify-between')}>
        <div className={'flex-1'}>
          <ul className="mt-4 flex flex-row md:mt-0 md:text-sm md:font-medium">{childrenWithProps}</ul>
        </div>
      </div>
    </nav>
  );
};

TabComponent.displayName = 'Tab.Group';
TabItem.displayName = 'Tab.Item';

export const TabGroup = Object.assign(TabComponent, {
  Item: TabItem,
});
