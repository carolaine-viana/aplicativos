import React, { useEffect, useState } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import Error, { IErrorProps } from '../Error/Error';
import { SpinnerContainer } from './FallbackSC';
import Loading from '../Loading/Loading';
import SearchEmpty, { SearchEmptyProps } from '../SearchEmpty/SearchEmpty';
import Spinner, { SpinnerProps } from '../Spinner/Spinner';
import FeedbackOffline, { FeedbackOfflineProps } from '../FeedbackOffline/FeedbackOffline';

interface FallbackWrapperProps {
  loading: boolean;
  success: boolean;
  error?: boolean | undefined | null;
  loadingComponent?: 'default' | 'spinner';
  spinnerProps?: SpinnerProps;
  errorProps?: IErrorProps;
  showEmptyState?: boolean | undefined | null;
  renderEmptyState?: () => React.ReactNode | undefined;
  emptyStateProps?: Partial<SearchEmptyProps>;
  renderContent: () => React.ReactNode | null;
  useOfflineFeedback?: boolean;
  offlineProps?: Partial<FeedbackOfflineProps>;
}

const FallbackWrapper: React.FC<FallbackWrapperProps> = ({
  error,
  loading,
  success,
  loadingComponent = 'default',
  spinnerProps,
  errorProps,
  showEmptyState,
  renderEmptyState,
  emptyStateProps,
  renderContent,
  useOfflineFeedback = false,
  offlineProps,
}) => {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    setFirstLoad(false);
  }, []);

  const { isConnected } = useNetInfo();

  if (!isConnected && useOfflineFeedback && !firstLoad) {
    return <FeedbackOffline {...offlineProps} />;
  }

  if (error) {
    return (
      <Error message="Ops!" action="Erro inesperado." {...errorProps} testID="feedback-error" />
    );
  }

  if (loading) {
    if (loadingComponent === 'spinner') {
      return (
        <SpinnerContainer>
          <Spinner text="Carregando..." {...spinnerProps} testID="feedback-spinner" />
        </SpinnerContainer>
      );
    }
    return <Loading hideBackgrop testID="feedback-loading" />;
  }

  if (showEmptyState) {
    return renderEmptyState?.() ?? <SearchEmpty {...emptyStateProps} testID="feedback-empty" />;
  }

  if (success && renderContent) {
    return <>{renderContent()}</>;
  }

  return null;
};

export default FallbackWrapper;
