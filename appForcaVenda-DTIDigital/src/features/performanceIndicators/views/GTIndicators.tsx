import React, { useCallback } from 'react';

import { usePromise } from '@shared/hooks';
import { ITeamIndicator } from 'shared/types';
import {
  CardPaper,
  FlexCenter,
  SectionTitle,
  Typography,
  FlexRow,
  ProgressBarIndicator,
} from '@shared/components';
import { getCurrency } from '@shared/utils';
import {
  ColumnContent,
  Label,
  Value,
  ObjectivesContainer,
  SpaceSeparator,
  RowContent,
  TitleContent,
  Content,
} from './PerformanceSC';
import PerformanceManager from '../services/PerformanceManager';

interface GTIndicatorsProps {
  gtId: number;
}

const Manager = new PerformanceManager();

const GTIndicators: React.FC<GTIndicatorsProps> = ({ gtId }) => {
  const loadGTIndicators = useCallback(() => Manager.getGTIndicators(gtId), [gtId]);
  const { data } = usePromise<ITeamIndicator | null>(loadGTIndicators);

  function renderContent() {
    if (data) {
      return (
        <>
          <FlexCenter bg="light">
            <ObjectivesContainer />
            <SectionTitle title="Clientes" icon="users" />
            <CardPaper
              renderBody={() => (
                <Content>
                  <TitleContent>
                    <Typography color="blue600" align="center" size={14} bold>
                      Mês
                    </Typography>
                  </TitleContent>
                  <RowContent>
                    <Typography variant="body" color="secondary">
                      Atendidos
                    </Typography>
                    <FlexRow>
                      <Typography variant="lead" color="primary" bold>
                        {`${data.teamCustomersResult}/`}
                      </Typography>
                      <Typography variant="lead" color="secondary" bold>
                        {data.teamCustomersForecast}
                      </Typography>
                    </FlexRow>
                  </RowContent>
                </Content>
              )}
            />
          </FlexCenter>

          <SpaceSeparator />
          <FlexCenter bg="light">
            <SectionTitle title="Vendas" icon="shopping-bag" />
            <CardPaper
              renderBody={() => (
                <Content>
                  <TitleContent>
                    <Typography color="blue600" align="center" size={14} bold>
                      Mês
                    </Typography>
                  </TitleContent>
                  <RowContent>
                    <ColumnContent>
                      <Label variant="body" color="secondary">
                        Total de Vendas
                      </Label>
                      <Value variant="lead" color="primary" bold>
                        {`${getCurrency(data.teamSalesResult)}`}
                      </Value>
                    </ColumnContent>

                    <ColumnContent>
                      <Label variant="body" color="secondary" align="right">
                        Perc. marca própria
                      </Label>
                      <Value variant="lead" color="error" bold align="right">
                        {`${data.teamPrivateBrandsSalesPercentage}%`}
                      </Value>
                    </ColumnContent>
                  </RowContent>
                  <ColumnContent>
                    <ProgressBarIndicator
                      progressbarProps={{
                        step: data?.teamPartialSalesPercentage ?? 0,
                        steps: 100,
                        fulfillment: data.teamPartialSalesFulfillment,
                      }}
                      label="Objetivo de Venda"
                    />
                  </ColumnContent>
                </Content>
              )}
            />
          </FlexCenter>
        </>
      );
    }
    return null;
  }

  return <>{renderContent()}</>;
};

export default GTIndicators;
