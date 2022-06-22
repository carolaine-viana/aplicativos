import React from 'react';
import expect from 'expect';
import { render } from '@shared/utils/test-utils';
import IncentiveIndicatorItem from '../views/IncentiveIndicatorItem';

describe('Tests IncentiveIndicatorItem', () => {
  it(`should render IncentiveIndicatorItem with 
   measure: "Clientes atendidos distintos"
   criterion: "Maior valor acima do objetivo"`, () => {
    const screen = render(
      <IncentiveIndicatorItem
        measure="Clientes atendidos distintos"
        criterion="Maior valor acima do objetivo"
      />
    );

    expect(screen.getByText('Medida')).toBeDefined();
    expect(screen.getByText('Clientes atendidos distintos')).toBeDefined();

    expect(screen.getByText('Critério')).toBeDefined();
    expect(screen.getByText('Maior valor acima do objetivo')).toBeDefined();
  });
});
