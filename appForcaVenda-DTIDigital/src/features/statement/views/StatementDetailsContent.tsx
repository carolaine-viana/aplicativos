import React from 'react';
import { Typography, Divider } from 'shared/components';
import { getCurrency } from 'shared/utils';
import { IEarningsSummary } from 'shared/types';
import { CardContent, StatementRow } from './StatementSC';

interface StatementDetailsContentProps {
  summaryEarnings: IEarningsSummary | null | undefined;
}

const StatementDetailsContent: React.FC<StatementDetailsContentProps> = ({ summaryEarnings }) => (
  <CardContent>
    <StatementRow>
      <Typography variant="overline" color="gray600">
        Disponível
      </Typography>
      <Typography variant="leadBody" bold color="primary" fallbackText="-">
        {getCurrency(summaryEarnings?.availableBalance)}
      </Typography>
    </StatementRow>
    <StatementRow>
      <Typography variant="overline" color="gray600">
        Total Créditos
      </Typography>
      <Typography variant="leadBody" bold color="primary" fallbackText="-">
        {getCurrency(summaryEarnings?.totalCredits)}
      </Typography>
    </StatementRow>
    <StatementRow>
      <Typography variant="overline" color="gray600">
        Total Débitos
      </Typography>
      <Typography variant="leadBody" bold color="red600" fallbackText="-">
        {getCurrency(summaryEarnings?.totalDebts)}
      </Typography>
    </StatementRow>

    <StatementRow>
      <Typography variant="overline" color="gray600">
        Saldo anterior
      </Typography>
      <Typography variant="leadBody" bold color="primary" fallbackText="-">
        {getCurrency(summaryEarnings?.openingBalance)}
      </Typography>
    </StatementRow>
    <StatementRow>
      <Typography variant="overline" color="gray600">
        Saldo atual
      </Typography>
      <Typography variant="leadBody" bold color="primary" fallbackText="-">
        {getCurrency(summaryEarnings?.finalBalance)}
      </Typography>
    </StatementRow>
    <StatementRow>
      <Typography variant="overline" color="gray600">
        Valor Impostos
      </Typography>
      <Typography variant="leadBody" bold color="primary" fallbackText="-">
        {getCurrency(summaryEarnings?.taxes)}
      </Typography>
    </StatementRow>
    <Divider color="blue50" />
  </CardContent>
);

export default StatementDetailsContent;
