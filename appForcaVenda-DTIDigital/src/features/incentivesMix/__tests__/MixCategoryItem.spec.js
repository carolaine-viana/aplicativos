import React from 'react';
import expect from 'expect';
import { render } from '@shared/utils/test-utils';
import MixCategoryItem from '../views/MixCategoryItem';
describe('Tests MixCategoryItem', () => {
  it('should  render all category properties', () => {
    const screen = render(
      <MixCategoryItem
        category={{
          productsGroup: 'productsGroup',
          productsCategory: 'productsCategory',
          productsSubcategory: 'productsSubcategory',
          operationType: 'operationType',
        }}
      />
    );

    expect(screen.queryByText('productsGroup')).not.toBeNull();
    expect(screen.queryByText('productsCategory')).not.toBeNull();
    expect(screen.queryByText('productsSubcategory')).not.toBeNull();
    expect(screen.queryByText('operationType')).not.toBeNull();
  });
  it('should  render "-" if some property is not passed down', () => {
    const screen = render(
      <MixCategoryItem
        category={{
          productsGroup: 'productsGroup',
          productsCategory: 'productsCategory',
          productsSubcategory: 'productsSubcategory',
          // operationType: 'operationType', shoul render "-" instead
        }}
      />
    );
    expect(screen.queryByText('productsGroup')).not.toBeNull();
    expect(screen.queryByText('-')).not.toBeNull();
  });
});
