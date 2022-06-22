import React, { useCallback } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {
  Typography,
  CardPaper,
  FlexSlice,
  FlexEnd,
  FlexStart,
  ProgressBarIndicator,
  DefaultIcon,
  SectionTitle,
  FallbackWrapper,
} from '@shared/components';
import { ITeamIndicator } from '@shared/types';
import { getCurrency } from '@shared/utils';
import { usePromise } from 'shared/hooks';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  RowContent,
  Container,
  ContainerDashManager,
  ValueContent,
  ContainerProgress,
  DetailsIconContainer,
  DetailsButtonContainer,
} from './PerformanceSC';
import PerformanceManager from '../services/PerformanceManager';

interface ManagerIndicatorsProps {}

const manager = new PerformanceManager();

const ManagerIndicators: React.FC<ManagerIndicatorsProps> = () => {
  const screenIsFocused = useIsFocused();

  const loadManagerIndicatorsPromise = useCallback(() => {
    if (screenIsFocused) {
      return manager.getManagerTeamIndicators();
    }
  }, [screenIsFocused]);

  const { data: indicators, ...promiseStatus } = usePromise<ITeamIndicator | null>(
    loadManagerIndicatorsPromise
  );

  const navigation = useNavigation();

  const handleSeeDetails = () => {
    if (indicators) {
      navigation.navigate('DashDetail', { indicators });
    }
  };

  const renderContent = () => {
    if (indicators) {
      return (
        <ContainerDashManager>
          <RowContent>
            <FlexSlice flex={1}>
              <Typography variant="body" color="secondary">
                Total vendas equipe
              </Typography>
              <ValueContent>
                <Typography variant="lead" bold color="primary">
                  {`${getCurrency(indicators.teamSalesResult)}`}
                </Typography>
              </ValueContent>
            </FlexSlice>
            <FlexSlice flex={1}>
              <Typography variant="body" color="secondary" align="right">
                Perc. marca própria
              </Typography>
              <ValueContent>
                <Typography variant="lead" bold color="primary" align="right">
                  {`${indicators.teamPrivateBrandsSalesPercentage}%`}
                </Typography>
              </ValueContent>
            </FlexSlice>
          </RowContent>

          <ContainerProgress>
            <ProgressBarIndicator
              progressbarProps={{
                step: indicators.teamPartialSalesPercentage,
                steps: 100,
                fulfillment: indicators.teamPartialSalesFulfillment,
              }}
              label="Meta vendas"
            />
          </ContainerProgress>
          <ContainerProgress>
            <ProgressBarIndicator
              progressbarProps={{
                step: indicators.teamPartialCustomersPercentage,
                steps: 100,
                fulfillment: indicators.teamPartialCustomersFulfillment,
              }}
              label="Positivação de Clientes"
            />
          </ContainerProgress>
          <TouchableOpacity onPress={handleSeeDetails}>
            <DetailsButtonContainer bg="light" flex={1} space="between">
              <FlexSlice flex={0.2}>
                <DetailsIconContainer>
                  <DefaultIcon name="clipboard" size={24} color="link" />
                </DetailsIconContainer>
              </FlexSlice>
              <FlexStart bg="light" flex={0.6}>
                <Typography variant="body" color="blue300" bold>
                  Visualizar Detalhamento
                </Typography>
              </FlexStart>
              <FlexEnd bg="light" flex={0.1}>
                <DefaultIcon name="chevron-right" size={24} color="link" />
              </FlexEnd>
            </DetailsButtonContainer>
          </TouchableOpacity>
        </ContainerDashManager>
      );
    }
  };

  return (
    <Container bg="light">
      <SectionTitle title="Visão geral mês" icon="bar-chart-2" />

      <FallbackWrapper
        {...promiseStatus}
        loadingComponent="spinner"
        renderContent={() => <CardPaper renderBody={renderContent} />}
      />
    </Container>
  );
};

export default ManagerIndicators;
