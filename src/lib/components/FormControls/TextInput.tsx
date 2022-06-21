import { ComponentProps, FC, ReactNode, useState } from 'react';
import classNames from 'classnames';

type Size = 'sm' | 'md' | 'lg';
type Color = 'base';

export type TextInputProps = ComponentProps<'input'> & {
  sizing?: Size;
  label?: string;
  helperText?: ReactNode;
  addon?: ReactNode;
  postAddon?: ReactNode;
  icon?: FC<ComponentProps<'svg'>>;
  color?: Color;
  isDisabled?: boolean;
};

const colorClasses: Record<
  Color,
  {
    inputContainer: string;
    inputContainerFocus: string;
    input: string;
    helperText: string;
    inputContainerDisabled: string;
  }
> = {
  base: {
    inputContainer:
      /*tw*/ 'flex bg-background-white border border-functional-100 rounded-2xl text-functional-120 placeholder:text-functional-100 outline-none disabled:border-functional-70 disabled:placeholder:text-functional-70',
    inputContainerFocus: /*tw*/ 'ring-2 ring-offset-2 ring-functional-100',
    inputContainerDisabled: /*tw*/ 'border-state-disabled',
    input:
      /*tw*/ 'bg-background-white border-0 outline-none ring-0 focus-visible:outline-none text-text-primary placeholder:text-text-support disabled:border-functional-70 disabled:placeholder:text-functional-70',
    helperText: 'text-gray-500 dark:text-gray-400',
  },
};

const labelStyle: Record<Size, string> = {
  sm: /*tw*/ 'text-base mb-2 text-text-primary',
  md: /*tw*/ 'text-base mb-2 text-text-primary',
  lg: /*tw*/ 'text-base mb-2 text-text-primary',
};

const componentSize: Record<Size, string> = {
  sm: /*tw*/ 'px-4 py-4',
  md: /*tw*/ 'px-4 py-4',
  lg: /*tw*/ 'px-4 py-4',
};

const textSizing: Record<Size, string> = {
  sm: /*tw*/ 'text-base',
  md: /*tw*/ 'text-base',
  lg: /*tw*/ 'text-base',
};

const addonSizing: Record<Size, string> = {
  sm: /*tw*/ 'h-6 w-6 text-base',
  md: /*tw*/ 'h-6 w-6',
  lg: /*tw*/ 'h-6 w-6',
};

export const TextInput: FC<TextInputProps> = ({
  className,
  label,
  sizing = 'sm',
  helperText,
  addon,
  postAddon,
  // TODO: Remove icon options
  icon: Icon,
  color = 'base',
  isDisabled = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      {label && <div className={labelStyle[sizing]}>{label}</div>}
      <div
        className={classNames(componentSize[sizing], colorClasses[color].inputContainer, {
          [colorClasses[color].inputContainerFocus]: isFocused,
          [colorClasses[color].inputContainerDisabled]: isDisabled,
        })}
      >
        {addon && <span className="inline-flex items-center text-gray-900">{addon}</span>}
        <div
          className={classNames('relative w-full', {
            'ml-2': addon,
            'mr-2': postAddon,
          })}
        >
          <input
            className={classNames(
              colorClasses[color].input,
              'group-focus block w-full border disabled:cursor-not-allowed disabled:opacity-50',
              textSizing[sizing],
              className,
            )}
            disabled={isDisabled}
            {...props}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        {postAddon && <span className="inline-flex items-center text-gray-900">{postAddon}</span>}
      </div>
      {helperText && <p className={classNames('mt-2 text-xs', colorClasses[color].helperText)}>{helperText}</p>}
    </>
  );
};
