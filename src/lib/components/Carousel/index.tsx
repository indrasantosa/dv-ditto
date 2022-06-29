import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren, ReactElement, ReactNode } from 'react';
import { Children, cloneElement, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import ScrollContainer from 'react-indiana-drag-scroll';
import { excludeClassName } from '../../helpers/exclude';
import windowExists from '../../helpers/window-exists';

export interface CarouselProps extends PropsWithChildren<ComponentProps<'div'>> {
  indicators?: boolean;
  leftControl?: ReactNode;
  rightControl?: ReactNode;
  slide?: boolean;
  slideInterval?: number;
}

export const Carousel: FC<CarouselProps> = ({
  children,
  indicators = true,
  leftControl,
  rightControl,
  slide = true,
  slideInterval,
  ...props
}): JSX.Element => {
  const isDeviceMobile = windowExists() && navigator.userAgent.indexOf('IEMobile') !== -1;
  const theirProps = excludeClassName(props);

  const carouselContainer = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const items = useMemo(
    () =>
      Children.map(children as ReactElement[], (child: ReactElement) =>
        cloneElement(child, {
          className: classNames(
            'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
            child.props.className,
          ),
        }),
      ),
    [children, 'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2'],
  );

  const navigateTo = useCallback(
    (item: number) => () => {
      item = (item + items.length) % items.length;
      if (carouselContainer.current) {
        carouselContainer.current.scrollLeft = carouselContainer.current.clientWidth * item;
      }
      setActiveItem(item);
    },
    [items.length],
  );

  useEffect(() => {
    if (carouselContainer.current && !isDragging) {
      setActiveItem(Math.round(carouselContainer.current.scrollLeft / carouselContainer.current.clientWidth));
    }
  }, [isDragging]);

  useEffect(() => {
    if (slide) {
      const intervalId = setInterval(() => !isDragging && navigateTo(activeItem + 1)(), slideInterval ?? 3000);

      return () => clearInterval(intervalId);
    }
  }, [activeItem, isDragging, navigateTo, slide, slideInterval]);

  const handleDragging = (dragging: boolean) => () => setIsDragging(dragging);

  return (
    <div className={'relative h-full w-full'} data-testid="carousel" {...theirProps}>
      <ScrollContainer
        className={classNames(
          'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg',
          (isDeviceMobile || !isDragging) && 'snap-x',
        )}
        draggingClassName="cursor-grab"
        innerRef={carouselContainer}
        onEndScroll={handleDragging(false)}
        onStartScroll={handleDragging(true)}
        vertical={false}
      >
        {items?.map(
          (item, index): JSX.Element => (
            <div
              key={index}
              className="w-full flex-shrink-0 transform cursor-grab snap-center"
              data-active={activeItem === index}
              data-testid="carousel-item"
            >
              {item}
            </div>
          ),
        )}
      </ScrollContainer>
      {indicators && (
        <div className={'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3'}>
          {items.map(
            (_, index): JSX.Element => (
              <button
                key={index}
                className={classNames('h-3 w-3 rounded-full', {
                  'bg-white dark:bg-gray-800': index === activeItem,
                  'bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800': index !== activeItem,
                })}
                onClick={navigateTo(index)}
                data-testid="carousel-indicator"
              />
            ),
          )}
        </div>
      )}
      <div className={'absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none'}>
        <button
          className="group"
          data-testid="carousel-left-control"
          onClick={navigateTo(activeItem - 1)}
          type="button"
        >
          {leftControl ? leftControl : <DefaultLeftControl />}
        </button>
      </div>
      <div className={'absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none'}>
        <button
          className="group"
          data-testid="carousel-right-control"
          onClick={navigateTo(activeItem + 1)}
          type="button"
        >
          {rightControl ? rightControl : <DefaultRightControl />}
        </button>
      </div>
    </div>
  );
};

const DefaultLeftControl: FC = () => (
  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
    <HiOutlineChevronLeft className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" />
  </span>
);

const DefaultRightControl: FC = () => (
  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
    <HiOutlineChevronRight className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6" />
  </span>
);
