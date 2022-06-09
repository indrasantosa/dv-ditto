import { ComponentProps, FC, ReactNode } from 'react';
import classNames from 'classnames';

type Size = 'sm' | 'md' | 'lg';
type Color = 'base' | 'green' | 'red';

export type TextInputProps = ComponentProps<'input'> & {
  sizing?: Size;
  helperText?: ReactNode;
  addon?: ReactNode;
  icon?: FC<ComponentProps<'svg'>>;
  color?: Color;
  isDisabled?: boolean;
};

const colorClasses: Record<Color, { input: string; helperText: string }> = {
  base: {
    input:
      /*tw*/ 'bg-background-white border-functional-100 text-functional-120 placeholder:text-functional-100 focus:ring-2 focus:ring-offset-2 focus:ring-functional-100 outline-none disabled:border-functional-70 disabled:placeholder:text-functional-70',
    helperText: 'text-gray-500 dark:text-gray-400',
  },
  green: {
    input:
      /*tw*/ 'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
    helperText: 'text-green-600 dark:text-green-500',
  },
  red: {
    input:
      /*tw*/ 'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
    helperText: 'text-red-600 dark:text-red-500',
  },
};

const textSizing: Record<Size, string> = {
  sm: /*tw*/ 'px-4 py-4 text-base',
  md: /*tw*/ 'p-2.5 text-sm',
  lg: /*tw*/ 'sm:text-md p-4',
};

const iconSizing: Record<Size, string> = {
  sm: /*tw*/ 'h-6 w-6 text-base',
  md: /*tw*/ 'h-6 w-6',
  lg: /*tw*/ 'h-6 w-6',
};

export const TextInput: FC<TextInputProps> = ({
  className,
  sizing = 'sm',
  helperText,
  addon,
  icon: Icon,
  color = 'base',
  isDisabled = false,
  ...props
}) => (
  <>
    <div className="flex">
      {addon && (
        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400">
          {addon}
        </span>
      )}
      <div className="relative w-full">
        {Icon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Icon className={`text-gray-500 dark:text-gray-400 ${iconSizing[sizing]}`} />
          </div>
        )}
        <input
          className={classNames(
            'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
            colorClasses[color].input,
            textSizing[sizing],
            {
              'pl-12': Icon,
              'rounded-2xl': !addon,
              'rounded-r-lg': addon,
            },
            className,
          )}
          disabled={isDisabled}
          {...props}
        />
      </div>
    </div>
    {helperText && <p className={classNames('mt-1 text-sm', colorClasses[color].helperText)}>{helperText}</p>}
  </>
);
