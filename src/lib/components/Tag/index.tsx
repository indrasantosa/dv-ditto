import { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export type TagColor = 'category1' | 'category2' | 'category3' | 'success' | 'error' | 'info' | 'warning';

export type TagProps = PropsWithChildren<{
  type?: TagColor;
  size?: 'sm' | 'md';
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
}>;

const colorClasses: Record<TagProps['type'] & string, string> = {
  category1: /*tw*/ 'bg-primary-25 text-primary-100',
  category2: /*tw*/ 'bg-secondary-25 text-secondary-100',
  category3: /*tw*/ 'bg-tertiary-25 text-tertiary-100',
  success: /*tw*/ 'bg-state-success text-background-white',
  warning: /*tw*/ 'bg-state-warning text-background-white',
  info: /*tw*/ 'bg-state-info text-background-white',
  error: /*tw*/ 'bg-state-error text-background-white',
};

const sizeClasses: Record<TagProps['size'] & string, string> = {
  sm: /*tw*/ 'text-xs rounded-full px-2 py-1 font-normal',
  md: /*tw*/ 'text-sm leading-6 rounded-full px-4 py-1 font-bold',
};

const iconSizeClasses: Record<TagProps['size'] & string, string> = {
  sm: 'w-3 h-3',
  md: 'w-3.5 h-3.5',
};

export const Tag: FC<TagProps> = ({ children, type: color = 'category1', size = 'sm', href, icon: Icon }) => {
  const span = (
    <>
      <span
        className={classNames('flex h-fit items-center gap-1 font-semibold', colorClasses[color], sizeClasses[size])}
      >
        {Icon && <Icon className={classNames(iconSizeClasses[size])} />}
        {children && <span>{children}</span>}
      </span>
    </>
  );

  return href ? (
    <a className="group" href={href}>
      {span}
    </a>
  ) : (
    span
  );
};
