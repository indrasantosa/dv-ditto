import { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';
import { HiX, HiOutlineExclamationCircle, HiCheck } from 'react-icons/hi';

export type SnackbarProps = PropsWithChildren<{
  variant?: 'error' | 'success' | 'default';
  additionalContent?: ReactNode;
  actions?: Array<ReactNode>;
  onDismiss?: () => void;
}>;

const colorClasses: Record<SnackbarProps['variant'] & string, string> = /*tw*/ {
  error: 'text-text-white bg-functional-100',
  success: 'text-text-white bg-functional-100',
  default: 'text-text-white bg-functional-100',
};

const iconStyle: Record<SnackbarProps['variant'] & string, string> = /*tw*/ {
  error: 'bg-state-error',
  success: 'bg-state-success',
  default: '',
};

const iconSet: Record<SnackbarProps['variant'] & string, FC<ComponentProps<'svg'>> | undefined> = {
  error: HiOutlineExclamationCircle,
  success: HiCheck,
  default: undefined,
};

export const Snackbar: FC<SnackbarProps> = ({ children, variant = 'default', onDismiss, actions }) => {
  const Icon = iconSet[variant];
  console.log(onDismiss);
  return (
    <div
      className={classNames('flex flex-row rounded-lg border-b border-functional-70 text-sm', colorClasses[variant])}
      role="alert"
    >
      {Icon && (
        <div className={classNames('flex items-center rounded-l-lg px-4 py-3', iconStyle[variant])}>
          {<Icon className={classNames('inline h-6 w-6 flex-shrink-0 text-text-white')} />}
        </div>
      )}
      <div className="flex items-center px-4 py-3">
        <div>{children}</div>
      </div>
      <div className="flex items-stretch px-4 py-3">
        {actions}
        {onDismiss && (
          <button
            type="button"
            className={classNames('ml-3 text-functional-50 hover:text-functional-80')}
            aria-label="Close"
            onClick={onDismiss}
          >
            <span className="sr-only">Close</span>
            <HiX className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
};
