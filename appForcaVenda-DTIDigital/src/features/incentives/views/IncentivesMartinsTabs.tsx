import React from 'react';
import { TopTabs } from 'shared/components';
import { useSelectedIncentive } from '../hooks/useSelectedIncentive';
import IncentivesMartinsDetails from './IncentivesMartinsDetails';
import IncentivesMartinsPerformance from './IncentivesMartinsPerformance';
import IncentivesMartinsPerformanceWildCard from './IncentivesMartinsPerformanceWildCard';

interface IncentivesMartinsTabsProps {}

const IncentivesMartinsTabs: React.FC<IncentivesMartinsTabsProps> = () => {
  const { selectedIncentive } = useSelectedIncentive();
  const incentiveName = selectedIncentive?.name;
  return (
    <TopTabs
      tabs={[
        {
          tabName: 'Detalhes',
          component: IncentivesMartinsDetails,
        },
        {
          tabName: 'Desempenho',
          component:
            incentiveName === 'POSITIVACAO DE CLIENTES'
              ? IncentivesMartinsPerformance
              : IncentivesMartinsPerformanceWildCard,
        },
      ]}
    />
  );
};

export default IncentivesMartinsTabs;
