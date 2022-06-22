import React from 'react';
import expect from 'expect';
import { render } from '@shared/utils/test-utils';
import MixSupplierItem from '../views/MixSupplierItem';
describe('Tests MixSupplierItem', () => {
  it('should  render all supplier properties', () => {
    const screen = render(
      <MixSupplierItem
        supplier={{
          businessGroupId: '2022',
          businessGroupName: 'businessGroupName',
          supplierDivisionId: '1567',
          supplierDivisionName: 'supplierDivisionName',
        }}
      />
    );

    expect(screen.queryByText('2022')).not.toBeNull();
    expect(screen.queryByText('businessGroupName')).not.toBeNull();
    expect(screen.queryByText('1567')).not.toBeNull();
    expect(screen.queryByText('supplierDivisionName')).not.toBeNull();
  });
  it('should  render "-" if some property is not passed down', () => {
    const screen = render(
      <MixSupplierItem
        supplier={{
          businessGroupId: '2022',
          businessGroupName: 'businessGroupName',
          supplierDivisionId: '1567',
          // supplierDivisionName: 'supplierDivisionName',
        }}
      />
    );
    expect(screen.queryByText('2022')).not.toBeNull();
    expect(screen.queryByText('-')).not.toBeNull();
  });
});
