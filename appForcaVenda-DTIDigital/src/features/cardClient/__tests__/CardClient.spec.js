import React from 'react';
import jestExpect from 'expect';
import { render } from '@shared/utils/test-utils';
import CardClient from '../views/CardClient';
import * as navigationHooks from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useRoute: jest.fn().mockReturnValue({
    name: 'Clientes',
    params: { isHistory: false, isOccurrence: false },
  }),
}));

jest.mock('../../../shared/components/CustomStatusBar/CustomStatusBar', () => {
  const { View } = require('react-native');
  return () => <View testID="CustomStatusBar" />;
});

jest.mock('styled-components', () => {
  return {
    useTheme: jest.fn().mockReturnValue({
      palette: {
        white: '#ffffff',
      },
    }),
  };
});

describe('CardClient', () => {
  describe('tests tag novo', () => {
    it('it should render "Novo" if customer is new customer', () => {
      const screen = render(
        <CardClient
          customer={{ newCustomer: true, creditStatus: 'Reabilitado' }}
          openForm={() => {}}
        />
      );
      jestExpect(screen.queryByText('Novo')).not.toBeNull();
    });

    it('it should not render "novo" if customer is not new', () => {
      const screen = render(
        <CardClient
          customer={{ newCustomer: false, creditStatus: 'Reabilitado' }}
          openForm={() => {}}
        />
      );
      jestExpect(screen.queryByText('Novo')).toBeNull();
    });
  });

  describe('tests on add button', () => {
    it('it should render add button if route is "Clientes"', () => {
      const screen = render(
        <CardClient customer={{ newCustomer: true, creditStatus: 'Reabilitado' }} />
      );

      jestExpect(screen.queryByText('Adicionar ao roteiro')).not.toBeNull();
    });

    it('it should not render add button if route is not "Clientes"', () => {
      navigationHooks.useRoute.mockReturnValueOnce({
        name: 'Roteiro',
      });

      const screen = render(
        <CardClient customer={{ newCustomer: true, creditStatus: 'Reabilitado' }} />
      );
      jestExpect(screen.queryByText('Adicionar ao roteiro')).toBeNull();
    });

    it.skip('it should render add disable if business unit is "Cortado" ', () => {
      const screen = render(
        <CardClient customer={{ newCustomer: true, creditStatus: 'Cortado' }} />
      );
      const addText = screen.queryByText('Cliente cortado');
      jestExpect(addText.props.color).toMatch('gray200');
    });

    it('should disable button', () => {
      const screen = render(
        <CardClient
          customer={{ newCustomer: true, creditStatus: 'Reabilitado', disabled: true }}
          disabled={true}
        />
      );
      const disable = screen.queryByText('Cliente já agendado');
      jestExpect(disable.props.color).toMatch('gray200');
    });
  });

  describe('business unit tests', () => {
    it('should render "-" if there is no custumer business unit ', () => {
      const screen = render(
        <CardClient
          customer={{
            newCustomer: true,
            creditStatus: 'Reabilitado',
          }}
        />
      );
      const businessUnitText = screen.getByTestId('cardClientBusinessUnit');
      jestExpect(businessUnitText.props.children).toMatch('-');
    });

    it('should render if there is custumer business unit', () => {
      const screen = render(
        <CardClient
          customer={{
            newCustomer: true,
            creditStatus: 'Reabilitado',
            businessUnit: 'Varejo batata',
          }}
        />
      );
      const businessUnitText = screen.getByTestId('cardClientBusinessUnit');
      jestExpect(businessUnitText.props.children).toMatch('Varejo batata');
    });
  });

  describe('tests on Badge', () => {
    it('it should render badge with color primary if customer is "Reabilitado" ', () => {
      const screen = render(
        <CardClient customer={{ newCustomer: true, creditStatus: 'Reabilitado' }} />
      );
      const textBadge = screen.getByText('Reabilitado');
      jestExpect(textBadge.props.color).toMatch('blue600');
    });

    it('it should render badge with color secondary if customer is "Suspenso', () => {
      const screen = render(
        <CardClient customer={{ newCustomer: true, creditStatus: 'Suspenso' }} />
      );

      const textBadge = screen.getByText('Suspenso');
      jestExpect(textBadge.props.color).toMatch('orange600');
    });

    it('it should render badge with color danger if customer is "Cortado"', () => {
      const screen = render(
        <CardClient customer={{ newCustomer: true, creditStatus: 'Cortado' }} />
      );
      const textBadge = screen.getByText('Cortado');
      jestExpect(textBadge.props.color).toMatch('red600');
    });

    it('it should render badge with color warning if customer is "Normal Cash"', () => {
      const screen = render(
        <CardClient customer={{ newCustomer: true, creditStatus: 'Normal Cash' }} />
      );

      const textBadge = screen.getByText('Normal Cash');
      jestExpect(textBadge.props.color).toMatch('yellow600');
    });

    it('it should render badge with color info if customer is "Normal"', () => {
      const screen = render(
        <CardClient customer={{ newCustomer: true, creditStatus: 'Normal' }} />
      );
      const textBadge = screen.getByText('Normal');
      jestExpect(textBadge.props.color).toMatch('blue300');
    });
  });

  describe('tests for "Roteiro" screen', () => {
    beforeEach(() => {
      navigationHooks.useRoute.mockReturnValue({
        name: 'Roteiro',
        params: { isHistory: false, isOccurrence: false },
      });
    });

    it('it should render button "Concluir" if screen is "Roteiro"', () => {
      const screen = render(
        <CardClient customer={{ newCustomer: true, creditStatus: 'Reabilitado' }} />
      );

      const getButtonConcluir = screen.queryByText('Concluir');
      jestExpect(getButtonConcluir).not.toBeNull();
    });

    it.skip('it should render button "Excluir" if screen is "Roteiro" ', () => {
      const screen = render(
        <CardClient customer={{ newCustomer: true, creditStatus: 'Reabilitado' }} />
      );

      const getButtonExcluir = screen.queryByText('Excluir');
      jestExpect(getButtonExcluir).not.toBeNull();
    });

    it('it should render button "Editar" if screen is "Roteiro" ', () => {
      const screen = render(
        <CardClient customer={{ newCustomer: true, creditStatus: 'Reabilitado' }} />
      );

      const getButtonEditar = screen.queryByText('Editar');
      jestExpect(getButtonEditar).not.toBeNull();
    });
  });

  describe('tests on calendar and clock icon', () => {
    beforeEach(() => {
      navigationHooks.useRoute.mockReturnValue({
        name: 'Roteiro',
        params: { isHistory: false, isOccurrence: false },
      });
    });
    it('should render calendar icon if screen is "Roteiro"', () => {
      const screen = render(
        <CardClient
          customer={{
            newCustomer: true,
            creditStatus: 'Reabilitado',
            schedule: new Date(2022, 1, 21),
          }}
        />
      );

      const getCalendarIcon = screen.queryByTestId('calendarIconTest');
      jestExpect(getCalendarIcon).not.toBeNull();
    });

    it('should render clock icon if screen is "Roteiro"', () => {
      const screen = render(
        <CardClient
          customer={{
            newCustomer: true,
            creditStatus: 'Reabilitado',
            schedule: new Date(2022, 1, 21),
          }}
        />
      );

      const getClockIcon = screen.queryByTestId('clockIconTest');
      jestExpect(getClockIcon).not.toBeNull();
    });
  });

  describe('Tests buttons card when route is "Roteiro"', () => {
    beforeEach(() => {
      navigationHooks.useRoute.mockReturnValue({
        name: 'Roteiro',
        params: { isHistory: false, isOccurrence: false },
      });
    });
    it('should render buttons "Concluir", "Excluir" and "Editar"', () => {
      const screen = render(
        <CardClient
          customer={{
            newCustomer: true,
            creditStatus: 'Reabilitado',
            schedule: new Date(2022, 1, 21),
          }}
        />
      );

      const concludeButton = screen.queryByText('Concluir');
      const editButton = screen.queryByText('Editar');

      jestExpect(concludeButton).not.toBeNull();
      jestExpect(editButton).not.toBeNull();
    });
    it('should NOT render buttons "Concluir", "Excluir" and "Editar" when route is "Clientes" ', () => {
      navigationHooks.useRoute.mockReturnValueOnce({
        name: 'Clientes',
        params: { isHistory: false, isOccurrence: false },
      });
      const screen = render(
        <CardClient
          customer={{
            newCustomer: true,
            creditStatus: 'Reabilitado',
            schedule: new Date(2022, 1, 21),
          }}
        />
      );

      const concludeButton = screen.queryByText('Concluir');
      const editButton = screen.queryByText('Editar');

      jestExpect(concludeButton).toBeNull();
      jestExpect(editButton).toBeNull();
    });
  });
});
