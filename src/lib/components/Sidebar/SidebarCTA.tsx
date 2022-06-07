import classNames from 'classnames';
import { PropsWithChildren, FC } from 'react';
import { Color } from '../Button';

export interface SidebarCTAProps extends PropsWithChildren<Record<string, unknown>> {
  color?: Color;
}

const colorClasses: Record<Color, string> = {
  primary: 'bg-blue-50 dark:bg-blue-900',
  secondary: 'bg-blue-50 dark:bg-blue-900',
  tertiary: 'bg-blue-50 dark:bg-blue-900',
};

const SidebarCTA: FC<SidebarCTAProps> = ({ children, color = 'primary' }) => {
  return <div className={classNames('mt-6 rounded-lg p-4', colorClasses[color])}>{children}</div>;
};

SidebarCTA.displayName = 'Sidebar.CTA';
export default SidebarCTA;
