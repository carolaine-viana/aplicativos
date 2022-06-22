import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Typography, CardPaper, FlexRow, SearchHeader, CustomStatusBar } from '@shared/components';
import { getCurrency } from '@shared/utils';
import { ITeamIndicator } from '@shared/types';
import { ColumnContent, Container, ContainerDetail, ValueContent } from './IndicatorsDetailSC';

interface ManagerIndicatorsDetailsProps {
  indicators?: ITeamIndicator;
}

const ManagerIndicatorsDetails: React.FC<ManagerIndicatorsDetailsProps> = ({ indicators }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const renderContent = () => {
    if (!indicators) {
      return null;
    }
    return (
      <ContainerDetail>
        <ColumnContent>
          <Typography variant="body" color="secondary">
            Total vendas equipe
          </Typography>
          <ValueContent>
            <Typography variant="lead" bold color="primary">
              {`${getCurrency(indicators.teamSalesResult)}`}
            </Typography>
          </ValueContent>
        </ColumnContent>
        <ColumnContent>
          <Typography variant="body" color="secondary">
            Perc. marca própria
          </Typography>
          <ValueContent>
            <Typography variant="lead" bold color="primary">
              {`${indicators.teamPrivateBrandsSalesPercentage}%`}
            </Typography>
          </ValueContent>
        </ColumnContent>
        <ColumnContent>
          <Typography variant="body" color="secondary">
            Meta de Vendas
          </Typography>
          <Typography variant="lead" color="primary" bold>
            {`${getCurrency(indicators.teamSalesResult)}/`}
          </Typography>
          <Typography variant="lead" color="secondary" bold>
            {`${getCurrency(indicators.teamSalesForecast)}`}
          </Typography>
        </ColumnContent>
        <ColumnContent>
          <Typography variant="body" color="secondary">
            Clientes Positivados
          </Typography>
          <FlexRow>
            <Typography variant="lead" color="primary" bold>
              {`${indicators.teamCustomersResult}/`}
            </Typography>
            <Typography variant="lead" color="secondary" bold>
              {`${indicators.teamCustomersForecast}`}
            </Typography>
          </FlexRow>
        </ColumnContent>
      </ContainerDetail>
    );
  };
  return (
    <>
      <CustomStatusBar backgroundColor={theme.palette.white} barStyle="dark-content" />
      <SearchHeader
        headerProps={{ title: 'Dashboard Detalhado' }}
        onClickArrow={() => navigation.goBack()}
      />
      <Container>
        <CardPaper renderBody={() => renderContent()} />
      </Container>
    </>
  );
};

export default ManagerIndicatorsDetails;
