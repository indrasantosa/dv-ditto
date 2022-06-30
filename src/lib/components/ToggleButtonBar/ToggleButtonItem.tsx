import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export type TabLinkProps = PropsWithChildren<{
  active?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}>;

const indicator = /*tw*/ 'border-y border-l last:border-r first:rounded-l-2xl last:rounded-r-2xl border-border-border3';
const indicatorBase = /*tw*/ '';
const indicatorActive = /*tw*/ 'bg-primary-25';

const element = /*tw*/ 'text-text-primary hover:text-text-tertiary text-base';
const elementActive = /*tw*/ 'text-base text-primary-100';

export const ToggleButtonItem: FC<TabLinkProps> = ({ active, disabled, children, onPress }) => {
  return (
    <li
      onClick={onPress}
      className={classNames('relative flex-1', indicator, {
        [indicatorBase]: !active,
        [indicatorActive]: active,
      })}
    >
      <div
        className={classNames(
          'flex min-w-[70px] cursor-pointer flex-row items-center justify-center px-4 py-3 duration-150',
          {
            [elementActive]: active,
            [element]: !active,
          },
        )}
      >
        {children}
      </div>
    </li>
  );
};
