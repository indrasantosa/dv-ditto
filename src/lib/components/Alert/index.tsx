import { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import classNames from 'classnames';
import {
  HiX,
  HiOutlineInformationCircle,
  HiOutlineExclamationCircle,
  HiOutlineExclamation,
  HiCheck,
} from 'react-icons/hi';

export type AlertProps = PropsWithChildren<{
  variant?: 'info' | 'error' | 'success' | 'warning';
  additionalContent?: ReactNode;
  onDismiss?: () => void;
}>;

const colorClasses: Record<AlertProps['variant'] & string, string> = /*tw*/ {
  info: 'text-text-primary bg-background-white border-blue-500',
  error: 'text-text-primary bg-background-white border-red-500',
  success: 'text-text-primary bg-background-white border-green-500',
  warning: 'text-text-primary bg-background-white border-yellow-500',
};

const iconStyle: Record<AlertProps['variant'] & string, string> = /*tw*/ {
  info: 'text-state-info',
  error: 'text-state-error',
  success: 'text-state-success',
  warning: 'text-state-warning',
};

const iconSet: Record<AlertProps['variant'] & string, FC<ComponentProps<'svg'>>> = {
  info: HiOutlineInformationCircle,
  error: HiOutlineExclamationCircle,
  success: HiCheck,
  warning: HiOutlineExclamation,
};

export const Alert: FC<AlertProps> = ({ children, variant: color = 'info', additionalContent, onDismiss }) => {
  const Icon = iconSet[color];
  return (
    <div
      className={classNames('flex flex-col gap-3 border-b border-functional-70 p-3 text-xs', colorClasses[color])}
      role="alert"
    >
      <div className="flex items-center">
        {<Icon className={classNames('mr-3 inline h-6 w-6 flex-shrink-0', iconStyle[color])} />}
        <div>{children}</div>
        {onDismiss && (
          <button
            type="button"
            className={classNames('ml-3 text-functional-100 hover:text-functional-80')}
            aria-label="Close"
            onClick={onDismiss}
          >
            <span className="sr-only">Close</span>
            <HiX className="h-6 w-6" />
          </button>
        )}
      </div>
      {additionalContent && <div>{additionalContent}</div>}
    </div>
  );
};
