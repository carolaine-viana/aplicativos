import React from 'react';
import expect from 'expect';
import { render, waitFor } from '@shared/utils/test-utils';
import { CLASSIFIED_INCENTIVES_MOCK } from './_incentivesData.mock';
import '../../../shared/utils/mock-react-native-third-lib';
import * as navigationHooks from '@react-navigation/native';
import IncentiveManagerMock from '../services/IncentiveManager';
import Incentives from '../views/Incentives';
import * as incentiveHooks from '../hooks/useIncentiveType';
import * as roleInfoMock from '@shared/hooks/useRoleInfo';
import * as incentivesUtils from '../incentivesUtils';

jest.mock('../incentivesUtils', () => {
  return {
    getData: jest.fn(),
  };
});

jest.mock('@shared/hooks/useSearch', () => {
  return {
    useSearch: jest.fn().mockImplementation(() => ({
      searchState: {
        searchText: '',
      },
    })),
  };
});

jest.mock('@shared/hooks/useRedux', () => {
  return {
    useRedux: jest.fn(),
  };
});

jest.mock('@shared/hooks/useRoleInfo', () => {
  return {
    useRoleInfo: jest.fn(),
  };
});

jest.mock('../services/IncentiveManager');

jest.mock('../hooks/useIncentiveType', () => ({
  useIncentiveType: jest.fn(),
}));

jest.mock('@react-navigation/native', () => {
  return {
    useIsFocused: jest.fn(),
    useRoute: jest.fn(),
    getFocusedRouteNameFromRoute: jest.fn(),
  };
});

jest.mock('../views/IncentiveMartins', () => {
  const { View, Text } = require('react-native');
  return (props) => {
    return (
      <View testID="IncentiveMartins">
        <Text> {`${props.incentive.name}-${props.incentive.type}`} </Text>{' '}
      </View>
    );
  };
});

jest.mock('../views/IncentiveConsult', () => {
  const { View, Text } = require('react-native');
  return (props) => (
    <View testID="IncentiveConsult">
      <Text> {`${props.incentive.name}-${props.incentive.type}`} </Text>{' '}
    </View>
  );
});

describe('Tests Incentives', () => {
  const mockSetIncentiveTypeFunc = jest.fn();
  let managerInstance;

  beforeAll(() => {
    navigationHooks.useIsFocused.mockReturnValue(true);
    managerInstance = IncentiveManagerMock.mock.instances[0];
    managerInstance.getAllIncentives = jest.fn();
    navigationHooks.getFocusedRouteNameFromRoute.mockResolvedValue('INCETIVES_LIST');
    roleInfoMock.useRoleInfo.mockResolvedValue({
      roleInfo: {
        isRCA: true,
      },
    });
  });

  describe('Tests when intentiveType is "TODOS" ', () => {
    it('should render incentives "suppliers" and "martins"', async () => {
      incentiveHooks.useIncentiveType.mockReturnValue({
        intentiveType: 'TODOS',
        setIncentiveType: mockSetIncentiveTypeFunc,
      });

      managerInstance.getAllIncentives.mockResolvedValue(CLASSIFIED_INCENTIVES_MOCK);

      incentivesUtils.getData.mockReturnValueOnce([
        ...CLASSIFIED_INCENTIVES_MOCK.classifiedIncentivesMartins,
        ...CLASSIFIED_INCENTIVES_MOCK.classifiedIncentivesSuppliers,
      ]);

      const screen = render(<Incentives />);
      screen.rerender(<Incentives />);
      expect(screen.queryByTestId('feedback-spinner')).not.toBeNull();

      await waitFor(() => expect(managerInstance.getAllIncentives).toHaveBeenCalled());

      expect(incentivesUtils.getData).toHaveBeenCalled();
      const list = screen.queryByTestId('incentives-list');

      expect(list.props.data).toHaveLength(2);

      expect(screen.queryByText(/Icentive Name-martins/)).not.toBeNull();
      expect(screen.queryByText(/Icentive Name-supplier/)).not.toBeNull();
    });
  });

  describe('Tests when intentiveType is "INCENTIVO_MARTINS" ', () => {
    it('should rnder only icentives martins  ', async () => {
      incentiveHooks.useIncentiveType.mockReturnValue({
        intentiveType: 'INCENTIVO_MARTINS',
        setIncentiveType: mockSetIncentiveTypeFunc,
      });

      managerInstance.getAllIncentives.mockResolvedValueOnce(CLASSIFIED_INCENTIVES_MOCK);

      incentivesUtils.getData.mockReturnValueOnce([
        ...CLASSIFIED_INCENTIVES_MOCK.classifiedIncentivesMartins,
      ]);

      const screen = render(<Incentives />);
      expect(screen.queryByTestId('feedback-spinner')).not.toBeNull();

      await waitFor(() => {
        expect(managerInstance.getAllIncentives).toHaveBeenCalled();
      });

      const list = screen.queryByTestId('incentives-list');

      expect(list.props.data).toHaveLength(1);

      expect(screen.queryByText(/Icentive Name-martins/)).not.toBeNull();
    });
  });
  describe('Tests when intentiveType is "INCENTIVO_FORNECEDOR" ', () => {
    it('should rnder only icentive supplier  ', async () => {
      incentiveHooks.useIncentiveType.mockReturnValue({
        intentiveType: 'INCENTIVO_FORNECEDOR',
        setIncentiveType: mockSetIncentiveTypeFunc,
      });

      managerInstance.getAllIncentives.mockResolvedValueOnce(CLASSIFIED_INCENTIVES_MOCK);

      incentivesUtils.getData.mockReturnValueOnce([
        ...CLASSIFIED_INCENTIVES_MOCK.classifiedIncentivesSuppliers,
      ]);

      const screen = render(<Incentives />);
      expect(screen.queryByTestId('feedback-spinner')).not.toBeNull();

      await waitFor(() => {
        expect(managerInstance.getAllIncentives).toHaveBeenCalled();
      });

      const list = screen.queryByTestId('incentives-list');

      expect(list.props.data).toHaveLength(1);

      expect(screen.queryByText(/Icentive Name-supplier/)).not.toBeNull();
    });
  });
});
