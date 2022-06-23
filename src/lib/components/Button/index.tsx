import { ComponentProps, FC, ReactNode } from 'react';
import classNames from 'classnames';
import ButtonGroup from '../ButtonGroup';

export type Type = 'primary' | 'secondary' | 'tertiary';
type Size = 'sm' | 'md' | 'lg';
type PositionInGroup = 'start' | 'middle' | 'end';

export type ButtonComponentProps = Omit<ComponentProps<'button'>, 'color'> & {
  label?: ReactNode;
  isDisabled?: boolean;
  buttonType?: Type;
  size?: Size;
  icon?: FC<ComponentProps<'svg'>>;
  positionInGroup?: PositionInGroup;
};

const typeClasses: Record<Type, string> = {
  /**
   * Color should consist of text color, background color, border specs, hover, focus, active, disabled specs and dark mode
   * To change offset color, refer to this manual https://tailwindcss.com/docs/ring-offset-width#changing-the-offset-color
   * example:
   * blue: 'text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600'
   */
  primary:
    /*tw*/ 'text-functional-10 bg-primary-100 border border-transparent hover:bg-primary-125 focus:ring-offset-2 focus:bg-primary-125 focus:ring-2 focus:ring-primary-125 active:bg-primary-175 disabled:bg-state-disabled outline-none',
  secondary:
    /*tw*/ 'text-text-primary bg-background-white border border-border-border1 hover:text-text-secondary hover:bg-white hover:border-border-border2 focus:ring-offset-2 focus:ring-2 focus:ring-border-border2 active:text-text-tertiary active:border-border-border3 active:ring-border-border3 disabled:text-state-disabled disabled:border-state-disabled outline-none',
  tertiary:
    /*tw*/ 'text-text-primary bg-background-white border-0 hover:text-text-secondary hover:bg-background-white active:text-text-tertiary disabled:text-state-disabled focus:text-text-secondary focus:bg-background-grey outline-none',
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
  buttonType: types = 'primary',
  positionInGroup,
  ...props
}) => (
  <button
    data-testid="button-element"
    disabled={isDisabled}
    className={classNames(
      `group flex h-min w-fit items-center justify-center text-center font-medium transition-all duration-150 focus:z-10`,
      sizeClasses[size],
      typeClasses[types],
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
