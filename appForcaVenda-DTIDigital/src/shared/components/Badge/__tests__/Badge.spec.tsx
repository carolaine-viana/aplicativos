import React from 'react';
import jestExpect from 'expect';
import { render } from '../../../utils/test-utils';
import Badge from '../Badge';

describe('Badge', () => {
  it('badge primary', () => {
    const screen = render(<Badge color="primary" text="mocked text" />);
    jestExpect(screen.getByText('mocked text')).toBeDefined();
    jestExpect(screen.getByText('mocked text').props.color).toEqual('blue600');
  });

  it('badge secondary', () => {
    const screen = render(<Badge color="secondary" text="mocked text" />);
    jestExpect(screen.getByText('mocked text')).toBeDefined();
    jestExpect(screen.getByText('mocked text').props.color).toEqual('orange600');
  });

  it('badge success', () => {
    const screen = render(<Badge color="success" text="mocked text" />);
    jestExpect(screen.getByText('mocked text')).toBeDefined();
    jestExpect(screen.getByText('mocked text').props.color).toEqual('green800');
  });

  it('badge danger', () => {
    const screen = render(<Badge color="danger" text="mocked text" />);
    jestExpect(screen.getByText('mocked text')).toBeDefined();
    jestExpect(screen.getByText('mocked text').props.color).toEqual('red600');
  });

  it('badge warning', () => {
    const screen = render(<Badge color="warning" text="mocked text" />);
    jestExpect(screen.getByText('mocked text')).toBeDefined();
    jestExpect(screen.getByText('mocked text').props.color).toEqual('yellow600');
  });

  it('badge info', () => {
    const screen = render(<Badge color="info" text="mocked text" />);
    jestExpect(screen.getByText('mocked text')).toBeDefined();
    jestExpect(screen.getByText('mocked text').props.color).toEqual('blue300');
  });
});
