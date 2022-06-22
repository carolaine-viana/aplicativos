import React from 'react';
import expect from 'expect';
import '@shared/utils/mock-react-native-third-lib';
import { render, waitFor } from '@shared/utils/test-utils';
import SACWebView from '../views/SACWebView';
import * as navigationHooks from '@react-navigation/native';

import SACManagerMock from '../services/SACManager';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
    useIsFocused: jest.fn().mockReturnValue(true),
    useRoute: jest.fn(),
  };
});

jest.mock('react-native-webview', () => {
  const { View } = require('react-native');
  return {
    WebView: (props) => <View testID={props.testID}></View>,
  };
});

jest.mock('../services/SACManager');

describe('Tests SACWebView', () => {
  const MOCK_CNPJ = '1234';

  let managerInstance;
  beforeAll(() => {
    managerInstance = SACManagerMock.mock.instances[0];
    managerInstance.getOccurrencePage = jest.fn();
    managerInstance.getHistoryPage = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Tests when web view render occurrence(ask) page', () => {
    beforeAll(() => {
      managerInstance.getOccurrencePage.mockResolvedValue('linkAsk');
      navigationHooks.useRoute.mockReturnValue({
        params: {
          page: 'ask',
          cnpj: MOCK_CNPJ,
        },
      });
    });
    it('should render title Criar ocorrência', async () => {
      const screen = render(<SACWebView />);

      await waitFor(() =>
        expect(managerInstance.getOccurrencePage).toHaveBeenCalledWith(MOCK_CNPJ)
      );
      expect(screen.queryByText('Criar ocorrência')).not.toBeNull();
    });

    it('should render web view', async () => {
      const screen = render(<SACWebView />);
      const loading = screen.queryByTestId('feedback-spinner');
      expect(loading).toBeDefined();

      await waitFor(() =>
        expect(managerInstance.getOccurrencePage).toHaveBeenCalledWith(MOCK_CNPJ)
      );
      expect(screen.queryByTestId('feedback-spinner')).toBeNull();
      expect(screen.queryByTestId('web-view-ask')).not.toBeNull();
    });
  });

  describe('Tests when web view render history(account/questions/list) page', () => {
    beforeAll(() => {
      managerInstance.getHistoryPage.mockResolvedValue('linkHistory');
      navigationHooks.useRoute.mockReturnValue({
        params: {
          page: 'account/questions/list',
          cnpj: MOCK_CNPJ,
        },
      });
    });
    it('should render title Histórico de ocorrências', async () => {
      const screen = render(<SACWebView />);

      await waitFor(() => expect(managerInstance.getHistoryPage).toHaveBeenCalledWith(MOCK_CNPJ));
      expect(screen.queryByText('Histórico de ocorrências')).not.toBeNull();
    });

    it('should render web view', async () => {
      const screen = render(<SACWebView />);
      const loading = screen.queryByTestId('feedback-spinner');
      expect(loading).toBeDefined();

      await waitFor(() => expect(managerInstance.getHistoryPage).toHaveBeenCalledWith(MOCK_CNPJ));
      expect(screen.queryByTestId('feedback-spinner')).toBeNull();
      expect(screen.queryByTestId('web-view-account/questions/list')).not.toBeNull();
    });
  });
});
