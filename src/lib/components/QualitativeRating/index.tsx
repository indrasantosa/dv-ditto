import {
  ComponentProps,
  FC,
  PropsWithChildren,
  useState,
  Children,
  isValidElement,
  cloneElement,
  ReactNode,
} from 'react';
import classNamesLib from 'classnames';

const baseState =
  /*tw*/ 'flex h-10 w-10 items-center justify-center rounded-full border border-border-border4 duration-150';
const defaultState = /*tw*/ 'hover:bg-primary-50 hover:text-background-white';
const activeState = /*tw*/ 'bg-primary-100 text-background-white hover:bg-primary-125';

export type Size = 'sm' | 'md' | 'lg';

export type QualitativeRatingProps = PropsWithChildren<{
  className?: string;
  size?: Size;
  max?: number;
  readOnly?: boolean;
  value?: number;
  onChange?: (value: number) => void;
  IconComponent?: FC<ComponentProps<'svg'>>;
  classNames?: {
    base: string;
    default: string;
    active: string;
  };
}>;

const BasicRating: Array<Exclude<ReactNode, boolean | null | undefined>> = [
  <div key={0}>1</div>,
  <div key={1}>2</div>,
  <div key={2}>3</div>,
  <div key={3}>4</div>,
  <div key={4}>5</div>,
];

const QuantitativeRating: FC<QualitativeRatingProps> = ({
  className,
  size = 'md',
  value,
  onChange,
  // TODO: to be implemented
  readOnly = false,
  children = BasicRating,
  classNames = {
    base: baseState,
    default: defaultState,
    active: activeState,
  },
}) => {
  const [isSelectingValue, setIsSelectingValue] = useState(false);

  const childrenWithProps = Children.map(children, (child, index) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        onClick: () => onChange && onChange(index),
        className: classNamesLib(classNames.base, {
          [classNames.default]: index !== value,
          [classNames.active]: index === value,
        }),
        active: index === value,
      });
    }
    return child;
  });

  console.log(Children.count(children));
  Children.toArray(children);

  return (
    <div
      className={classNamesLib('flex cursor-pointer flex-row gap-8', className)}
      onMouseEnter={() => setIsSelectingValue(true)}
      onMouseLeave={() => setIsSelectingValue(false)}
    >
      {childrenWithProps}
    </div>
  );
};

export default QuantitativeRating;
