import { ComponentProps, FC, ReactNode } from 'react';
import classNames from 'classnames';
import ButtonGroup from './ButtonGroup';

export type Color = 'primary' | 'secondary' | 'tertiary';
type GradientMonochrome = 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple';
type GradientDuoTone =
  | 'purpleToBlue'
  | 'cyanToBlue'
  | 'greenToBlue'
  | 'purpleToPink'
  | 'pinkToOrange'
  | 'tealToLime'
  | 'redToYellow';
type Size = 'sm' | 'md' | 'lg';
type PositionInGroup = 'start' | 'middle' | 'end';

export type ButtonComponentProps = Omit<ComponentProps<'button'>, 'color'> & {
  outline?: boolean;
  label?: ReactNode;
  color?: Color;
  size?: Size;
  icon?: FC<ComponentProps<'svg'>>;
  gradientMonochrome?: GradientMonochrome;
  gradientDuoTone?: GradientDuoTone;
  positionInGroup?: PositionInGroup;
};

const BORDER_RADIUS = /*tw*/ classNames(`rounded-full`, `rou`, 'blue-');

const colorClasses: Record<Color, string> = {
  /**
   * Color should consist of text color, background color, border specs, hover, focus, active, disabled specs and dark mode
   * example:
   * blue: 'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600'
   */
  primary:
    'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600',
  secondary:
    'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600',
  tertiary:
    'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600',
};

const sizeClasses: Record<Size, string> = {
  sm: 'text-sm px-3 py-1.5',
  md: 'text-sm px-4 py-2',
  lg: 'text-base px-5 py-2.5',
};

const iconSizeClasses: Record<Size, string> = {
  sm: '!px-1.5',
  md: '!px-2',
  lg: '!p-2.5',
};

const borderRadiusClasses: Record<Size, string> = {
  sm: 'rounded-full',
  md: 'rounded-full',
  lg: 'rounded-full',
};

const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  className,
  label,
  outline,
  disabled = false,
  size = 'md',
  icon: Icon,
  color = 'primary',
  gradientMonochrome,
  gradientDuoTone,
  positionInGroup,
  ...props
}) => (
  <button
    data-testid="button-element"
    disabled={disabled}
    className={classNames(
      `group flex h-min w-fit items-center justify-center p-0.5 text-center font-medium focus:z-10 ${BORDER_RADIUS}`,
      colorClasses[color],
      {
        'border border-gray-900 dark:border-white': color === 'tertiary' && outline,
        'cursor-not-allowed opacity-50': disabled,
        'focus:!ring-2': !!positionInGroup,
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
      className={classNames('flex items-center', sizeClasses[size], borderRadiusClasses[size], {
        'bg-white text-gray-900 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white':
          outline,
        'rounded-r-none': positionInGroup === 'start',
        '!rounded-none': positionInGroup === 'middle',
        'rounded-l-none': positionInGroup === 'end',
        [iconSizeClasses[size]]: !!Icon,
      })}
    >
      {Icon ? (
        <Icon className="h-5 w-5" />
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
