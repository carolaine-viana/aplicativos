import React, { useCallback } from 'react';
import * as navigationHooks from '@react-navigation/native';
import { WebView } from 'react-native-webview';

import { DefaultScreen, FallbackWrapper, SearchHeader } from 'shared/components';
import { usePromise } from 'shared/hooks';
import { EPage, RoutesNames, TSACPages } from 'shared/types';

import SACManager from '../services/SACManager';
import { WebViewContainer } from './SACSC';

interface SACWebViewProps {}

type ParamList = {
  origin: {
    clientName: string;
    cnpj: string;
    id: string;
    page: TSACPages;
  };
};

const Manager = new SACManager();

const SACWebView: React.FC<SACWebViewProps> = () => {
  const navigation = navigationHooks.useNavigation();
  const isFocused = navigationHooks.useIsFocused();

  const route = navigationHooks.useRoute<navigationHooks.RouteProp<ParamList, 'origin'>>();
  const { page, cnpj } = route?.params;
  const isOccorrencePage = page === EPage.OCCURRENCE;
  const isHistoryPage = page === EPage.HISTORY;

  const loadLink = useCallback(() => {
    if (isFocused) {
      if (isOccorrencePage) {
        return Manager.getOccurrencePage(cnpj);
      }
      if (isHistoryPage) {
        return Manager.getHistoryPage(cnpj);
      }
      return null;
    }
    return null;
  }, [isFocused, cnpj, isOccorrencePage, isHistoryPage]);

  const { data, ...promiseStatus } = usePromise<string | null>(loadLink);
  const title = isHistoryPage ? 'Histórico de ocorrências' : 'Criar ocorrência';

  return (
    <DefaultScreen statusBarColor="blue50">
      <SearchHeader
        headerProps={{ title }}
        onClickArrow={() => {
          navigation.navigate({
            name: RoutesNames.CUSTOMERSLIST,
            params: { fromSAC: true },
          });
        }}
      />
      <WebViewContainer>
        <FallbackWrapper
          {...promiseStatus}
          loadingComponent="spinner"
          errorProps={{
            message: 'Nâo foi possível abrir o SAC',
          }}
          renderContent={() => (
            <WebView
              testID={`web-view-${page}`}
              source={{
                uri: data as string,
              }}
            />
          )}
        />
      </WebViewContainer>
    </DefaultScreen>
  );
};

export default SACWebView;
