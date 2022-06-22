import React, { useEffect } from 'react';
import { TopTabs } from 'shared/components';
import { useNavigation } from '@react-navigation/native';
import { useSelectedIncentive } from 'features/incentives/hooks/useSelectedIncentive';
import IncentivesPerformance from 'features/incentives/views/IncentivesPerformance';
import DetailsContentTab from './DetailsContentTab';
import MoreDetails from './MoreDetails';

interface IncentiveDetailsProps {}

const IncentiveDetails: React.FC<IncentiveDetailsProps> = () => {
  const { setSelectedIncentive } = useSelectedIncentive();

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setSelectedIncentive(null);
    });

    return unsubscribe;
  }, [navigation, setSelectedIncentive]);

  return (
    <TopTabs
      tabs={[
        {
          tabName: 'Detalhes',
          component: DetailsContentTab,
        },
        {
          tabName: 'Mais Detalhes',
          component: MoreDetails,
        },
        {
          tabName: 'Desempenho',
          component: IncentivesPerformance,
        },
      ]}
    />
  );
};

export default IncentiveDetails;
