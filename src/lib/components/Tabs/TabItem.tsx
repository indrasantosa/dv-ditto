import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export type TabLinkProps = PropsWithChildren<{
  active?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}>;

const indicator = /*tw*/ 'after:absolute after:bottom-0 after:left-0 after:w-full';
const indicatorBase = /*tw*/ ' after:h-[1px] after:bg-text-support';
const indicatorActive = /*tw*/ 'after:h-[2px] after:bg-primary-100';

const element = /*tw*/ 'text-text-support';
const elementActive = /*tw*/ 'text-primary-100';

export const TabItem: FC<TabLinkProps> = ({ active, disabled, children, onPress }) => {
  return (
    <li
      onClick={onPress}
      className={classNames('relative flex-1', indicator, {
        [indicatorBase]: !active,
        [indicatorActive]: active,
      })}
    >
      <div
        className={classNames('block min-w-[70px] cursor-pointer px-4 py-3 text-center', {
          [elementActive]: active,
          [element]: !active,
        })}
      >
        {children}
      </div>
    </li>
  );
};
