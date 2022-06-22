import React from 'react';
import expect from 'expect';
import { render } from '@shared/utils/test-utils';
import { formatValue, getProgressColor } from '../incentivesUtils';
import IncentiveIndicator from '../views/IncentiveIndicator';

describe('Tests IncentiveIndicator', () => {
  const indicator = {
    indicatorName: 'CLIENTES ATENDIDOS DISTINTOS',
    indicatorType: 'INTEGER',
    indicatorForecast: 2782,
    indicatorResult: 1648,
    indicatorGap: 648,
    classification: 3,
    indicatorPercentage: 60,
    indicatorFulfillment: 'COMPLETE',
  };

  it('should render indicator data', () => {
    const screen = render(<IncentiveIndicator indicator={indicator} />);

    expect(screen.getByText(/CLIENTES ATENDIDOS DISTINTOS/i)).toBeDefined();

    expect(screen.getByText('Objetivo')).toBeDefined();
    expect(screen.getByText(indicator.indicatorForecast.toString())).toBeDefined();

    expect(screen.getByText('Classific.')).toBeDefined();
    expect(screen.getByText(/3/i)).toBeDefined();

    expect(screen.getByText(/Realizado/)).toBeDefined();
    expect(screen.getByText(indicator.indicatorResult.toString())).toBeDefined();
  });
  it('should render indicator Super instead of Gap', () => {
    const screen = render(<IncentiveIndicator indicator={indicator} />);
    expect(screen.getByText(/Super/i)).toBeDefined();
    expect(screen.getByText(indicator.indicatorGap.toString())).toBeDefined();
  });
  it('should render indicator with Gap', () => {
    const indicatorNegativeGap = { ...indicator, indicatorGap: -100 };
    const screen = render(<IncentiveIndicator indicator={indicatorNegativeGap} />);
    expect(screen.getByText(/Gap/i)).toBeDefined();
    expect(screen.getByText(Number(-100).toString())).toBeDefined();
  });
});
