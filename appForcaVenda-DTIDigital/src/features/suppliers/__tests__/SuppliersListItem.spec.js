import React from 'react';
import expect from 'expect';
import { render } from '@shared/utils/test-utils';
import SuppliersListItem from '../views/SuppliersListItem';

describe('Tests SuppliersListItem', () => {
  it(`Should render Supplier Name and Code`, () => {
    const screen = render(
      <SuppliersListItem
        supplier={{
          id: 0,
          name: 'Supplier X',
          level: 'XXX',
        }}
      />
    );
    const supplierName = screen.getByText('Supplier X');
    const supplierCode = screen.getByText('XXX');
    expect(supplierName).toBeDefined();
    expect(supplierCode).toBeDefined();
  });
});
