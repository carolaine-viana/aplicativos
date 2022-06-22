import React from 'react';
import expect from 'expect';
import { render, waitFor, fireEvent } from '@shared/utils/test-utils';
import SalesForecast from '../views/SalesForecast';
import '@shared/utils/jestCustomMatchers';

describe('Tests SalesForecast', () => {
  it('should forecast tabs(Dia, Mês)', () => {
    const screen = render(<SalesForecast />);

    expect(screen.queryByText('Dia'));
    expect(screen.queryByText('Mês'));
  });
  it('when click on tab "Mês" it shoould be active', async () => {
    const screen = render(<SalesForecast />);

    const monthTab = screen.getByTestId('mes');
    await fireEvent.press(monthTab);

    const activeTab = screen.queryByText('Mês');
    const nonActiveTab = screen.queryByText('Dia');

    expect(activeTab.props.style).toContainObject({
      color: '#fff',
    });

    expect(nonActiveTab.props.style).toContainObject({
      color: '#000',
    });
  });

  it('when click on tab "Dia" it shoould be active', async () => {
    const screen = render(<SalesForecast />);

    const dayTab = screen.getByTestId('dia');
    await fireEvent.press(dayTab);

    const activeTab = screen.queryByText('Dia');
    const nonActiveTab = screen.queryByText('Mês');

    expect(activeTab.props.style).toContainObject({
      color: '#fff',
    });
    expect(nonActiveTab.props.style).toContainObject({
      color: '#000',
    });
  });
});
