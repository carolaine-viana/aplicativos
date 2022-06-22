import React from 'react';
import expect from 'expect';
import { render } from '@shared/utils/test-utils';
import MixProductItem from '../views/MixProductItem';
describe('Tests MixProductItem', () => {
  it('should  render all product properties', () => {
    const screen = render(
      <MixProductItem
        product={{
          id: '5555',
          name: 'product name',
          operationType: 'operation type',
        }}
      />
    );

    expect(screen.queryByText('5555')).not.toBeNull();
    expect(screen.queryByText('product name')).not.toBeNull();
    expect(screen.queryByText('operation type')).not.toBeNull();
  });
  it('should  render "-" if some property is not passed down', () => {
    const screen = render(
      <MixProductItem
        product={{
          id: '5555',
          name: 'product name',
          // operationType: 'operation type', should render "-" instead
        }}
      />
    );
    expect(screen.queryByText('5555')).not.toBeNull();
    expect(screen.queryByText('-')).not.toBeNull();
  });
});
