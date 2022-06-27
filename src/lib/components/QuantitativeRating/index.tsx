import { ComponentProps, FC, PropsWithChildren, useState } from 'react';
import classNames from 'classnames';
import { HiStar } from 'react-icons/hi';

export type Size = 'sm' | 'md' | 'lg';

const iconStyle: Record<Size, string> = {
  sm: 'w-5 h-5',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

export type QuantitativeRatingProps = PropsWithChildren<{
  className?: string;
  size?: Size;
  max?: number;
  readOnly?: boolean;
  value?: number;
  precision?: number;
  onChange?: (value: number) => void;
  IconComponent?: FC<ComponentProps<'svg'>>;
}>;

// Generate an array populated number from 0 to n
const range = (n: number) => Array.from({ length: n }, (_, i) => i);

export function getValueFromX(selectedGauge: number, gaugeLength: number, maxValue: number, precision: number) {
  const value = (selectedGauge / gaugeLength) * maxValue;
  const result = Math.ceil(value / precision) * precision;
  console.log(Math.round(result * 10) / 10);
  return Math.round(result * 10) / 10;
}

export type RatingIconProps = PropsWithChildren<{
  className?: string;
  size?: Size;
  readOnly?: boolean;
  value?: number;
  precision?: number;
  IconComponent: FC<ComponentProps<'svg'>>;
}>;

const Icon: FC<RatingIconProps> = ({ value = 0.0, size = 'md', IconComponent }) => {
  if (value === 0.0) {
    return (
      <div className={'relative transition-all duration-150 hover:scale-125'}>
        <IconComponent className={classNames('text-state-disabled', iconStyle[size])} />
        <div className="absolute left-0 top-0 w-0 overflow-hidden transition-all duration-150">
          <IconComponent className={classNames('text-primary-100', iconStyle[size])} />
        </div>
      </div>
    );
  }
  if (value === 1.0) {
    return (
      <div className={'relative transition-all duration-150 hover:scale-125'}>
        <IconComponent className={classNames('text-primary-100', iconStyle[size])} />
        <div className="absolute left-0 top-0 w-full overflow-hidden transition-all duration-150">
          <IconComponent className={classNames('text-primary-100', iconStyle[size])} />
        </div>
      </div>
    );
  }
  const valueInPercent = (value * 100).toFixed(0) + '%';
  console.log(valueInPercent);
  return (
    <div className={'relative transition-all duration-150 hover:scale-125'}>
      <IconComponent className={classNames('text-state-disabled', iconStyle[size])} />
      <div
        className={`absolute left-0 top-0 overflow-hidden transition-all duration-150`}
        style={{ width: valueInPercent }}
      >
        <IconComponent className={classNames('text-primary-100', iconStyle[size])} />
      </div>
    </div>
  );
};

const QuantitativeRating: FC<QuantitativeRatingProps> = ({
  className,
  size = 'md',
  max = 5,
  value = 0,
  precision = 1,
  onChange,
  IconComponent = HiStar,
  // TODO: to be implemented
  readOnly = false,
}) => {
  const [selectedValue, setSelectedValue] = useState(0);
  const [isSelectingValue, setIsSelectingValue] = useState(false);

  function handleMouseOver(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const selectGauge = event.clientX - event.currentTarget.offsetLeft;
    const maxGauge = event.currentTarget.offsetWidth;
    setSelectedValue(getValueFromX(selectGauge, maxGauge, max, precision));
  }
  let ratingValue = isSelectingValue ? selectedValue : value;

  return (
    <div
      className={classNames('flex cursor-pointer flex-row', className)}
      onMouseMove={handleMouseOver}
      onMouseEnter={() => setIsSelectingValue(true)}
      onMouseLeave={() => setIsSelectingValue(false)}
      onClick={() => {
        onChange && onChange(selectedValue);
      }}
    >
      {range(max).map((i) => {
        let rating = 0;
        if (ratingValue >= 1) {
          rating = 1;
          ratingValue -= 1;
        } else if (ratingValue > 0) {
          rating = ratingValue;
          ratingValue = 0;
        } else {
          rating = 0;
        }
        return <Icon key={i} value={rating} size={size} IconComponent={IconComponent} />;
      })}
    </div>
  );
};

export default QuantitativeRating;
