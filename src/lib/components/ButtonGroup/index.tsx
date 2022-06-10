import { Children, cloneElement, FC, PropsWithChildren, ReactElement, useMemo } from 'react';

import { ButtonComponentProps } from '../Button';

export type ButtonGroupProps = PropsWithChildren<{
  pill?: boolean;
  outline?: boolean;
}>;

const ButtonGroup: FC<ButtonGroupProps> = ({ children, outline }) => {
  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ButtonComponentProps>[], (child, index) =>
        cloneElement(child, {
          positionInGroup:
            index === 0
              ? 'start'
              : index === (children as ReactElement<ButtonComponentProps>[]).length - 1
              ? 'end'
              : 'middle',
        }),
      ),
    [children, outline],
  );

  return (
    <div className="inline-flex" role="group">
      {items}
    </div>
  );
};

ButtonGroup.displayName = 'Button.Group';
export default ButtonGroup;
