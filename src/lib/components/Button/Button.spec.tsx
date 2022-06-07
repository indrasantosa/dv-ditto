import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HiSun } from 'react-icons/hi';

import { Button } from '.';

describe('Button Component', () => {
  afterEach(cleanup);

  it('should be able to render a button', () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId('button-element')).toBeTruthy();
  });

  it('should be able to render a button with a label', () => {
    const { getByTestId } = render(<Button label="this-is-a-label" />);
    expect(getByTestId('button-element').children[0].children[0].innerHTML).toEqual('this-is-a-label');
  });

  it('should be able to render an icon button', () => {
    const { getByTestId } = render(<Button icon={HiSun} />);
    expect(getByTestId('button-element').children[0].children.length).toEqual(1);
    expect(getByTestId('button-element').children[0].children[0].tagName).toEqual('svg');
  });

  it('should be clickable', (done) => {
    const { getByTestId } = render(<Button onClick={() => done()}>Click me</Button>);
    userEvent.click(getByTestId('button-element'));
  });
});
