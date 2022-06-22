import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { IRcaTerritory, ITerritory } from 'shared/types';
import { Typography, ListItemAvatar } from '@shared/components';
import { ItemWrapper } from './RCAsListSC';

interface RCACardProps {
  rca: IRcaTerritory;
  showNavigation?: boolean;
}

const RCACard: React.FC<RCACardProps> = (props) => {
  const { rca, showNavigation = false } = props;
  const navigation = useNavigation();

  const renderTeorritories = () =>
    rca?.territories?.map((territory: ITerritory) => (
      <Typography
        key={`${territory.name}-${territory.id}`}
        testID="rcaRegion"
        color="secondary"
        variant="overline"
      >
        {`${territory.name}`}
      </Typography>
    ));

  const handleNavigation = () => {
    navigation.navigate('RCAProfile', {
      rca,
    });
  };

  return (
    <ItemWrapper>
      <ListItemAvatar
        mainText={rca.name}
        renderSecondaryText={renderTeorritories}
        navigateTo={showNavigation ? handleNavigation : undefined}
      />
    </ItemWrapper>
  );
};

export default RCACard;
