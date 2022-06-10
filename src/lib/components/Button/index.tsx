import { ComponentProps, FC, ReactNode } from 'react';
import classNames from 'classnames';
import ButtonGroup from '../ButtonGroup';

export type Color = 'primary' | 'secondary' | 'tertiary';
type Size = 'sm' | 'md' | 'lg';
type PositionInGroup = 'start' | 'middle' | 'end';

export type ButtonComponentProps = Omit<ComponentProps<'button'>, 'color'> & {
  label?: ReactNode;
  isDisabled?: boolean;
  color?: Color;
  size?: Size;
  icon?: FC<ComponentProps<'svg'>>;
  positionInGroup?: PositionInGroup;
};

const colorClasses: Record<Color, string> = {
  /**
   * Color should consist of text color, background color, border specs, hover, focus, active, disabled specs and dark mode
   * To change offset color, refer to this manual https://tailwindcss.com/docs/ring-offset-width#changing-the-offset-color
   * example:
   * blue: 'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600'
   */
  primary:
    /*tw*/ 'text-functional-10 bg-primary-100 border border-transparent hover:bg-primary-80 focus:ring-offset-2 focus:bg-primary-80 focus:ring-2 focus:ring-primary-80 active:bg-primary-40 disabled:bg-primary-10 outline-none',
  secondary:
    /*tw*/ 'text-black bg-white border border-primary-100 hover:text-primary-80 hover:bg-white hover:border-primary-80 focus:ring-offset-2 focus:ring-2 focus:ring-primary-80 active:text-secondary-100 active:border-secondary-60 active:ring-secondary-60 disabled:text-secondary-60 disabled:border-secondary-60 outline-none',
  tertiary:
    /*tw*/ 'text-black bg-white border-0 border-primary-100 hover:text-primary-80 hover:bg-white hover:border-primary-80 active:text-secondary-100 active:border-secondary-60 disabled:text-secondary-60 outline-none',
};

const sizeClasses: Record<Size, string> = {
  sm: /*tw*/ 'text-sm leading-6 px-4 py-2',
  md: /*tw*/ 'text-base font-semibold px-8 py-4',
  lg: /*tw*/ 'text-base font-semibold px-8 py-5',
};

const iconSizeClasses: Record<Size, string> = {
  sm: /*tw*/ '',
  md: /*tw*/ '',
  lg: /*tw*/ '',
};

const borderRadiusClasses: Record<Size, string> = {
  sm: /*tw*/ 'rounded-full',
  md: /*tw*/ 'rounded-full',
  lg: /*tw*/ 'rounded-full',
};

const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  className,
  label,
  isDisabled = false,
  size = 'md',
  icon: Icon,
  color = 'primary',
  positionInGroup,
  ...props
}) => (
  <button
    data-testid="button-element"
    disabled={isDisabled}
    className={classNames(
      `group flex h-min w-fit items-center justify-center text-center font-medium focus:z-10`,
      sizeClasses[size],
      colorClasses[color],
      borderRadiusClasses[size],
      {
        // 'border border-gray-900 dark:border-white': color === 'tertiary' && outline,
        'cursor-not-allowed': isDisabled,
        'rounded-r-none': positionInGroup === 'start',
        '!rounded-none border-l-0 pl-0': positionInGroup === 'middle',
        'rounded-l-none border-l-0 pl-0': positionInGroup === 'end',
      },
      className,
    )}
    type="button"
    {...props}
  >
    <span
      className={classNames('flex items-center', {
        'rounded-r-none': positionInGroup === 'start',
        '!rounded-none': positionInGroup === 'middle',
        'rounded-l-none': positionInGroup === 'end',
        [iconSizeClasses[size]]: !!Icon,
      })}
    >
      {Icon ? (
        <Icon className="h-6 w-6" />
      ) : (
        <>
          {children}
          {label && (
            <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-800">
              {label}
            </span>
          )}
        </>
      )}
    </span>
  </button>
);

ButtonComponent.displayName = 'Button';
export const Button = Object.assign(ButtonComponent, {
  Group: ButtonGroup,
});
