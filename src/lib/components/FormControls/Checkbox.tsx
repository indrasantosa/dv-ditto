import { ComponentProps, FC } from 'react';
import classNames from 'classnames';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type'>;

export const Checkbox: FC<CheckboxProps> = ({ className, ...props }) => (
  <input
    className={classNames(
      'h-6 w-6 rounded border border-primary-100 bg-functional-10 text-primary-100 hover:bg-primary-80 focus:ring-2 focus:ring-primary-80',
      className,
    )}
    type="checkbox"
    {...props}
  />
);
