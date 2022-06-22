import React from 'react';

import { Typography, ChipFilters } from 'shared/components';
import { TOption } from 'shared/types';
import { getSelectedIncentiveByValue, incentiveOptions } from '../incentivesUtils';
import { IncentiveSelectContainer } from './IncentivesSC';

interface IncentiveSelectProps {
  onSelect: (o: TOption) => void;
  intentiveType: string;
}

const IncentiveSelect: React.FC<IncentiveSelectProps> = ({ onSelect, intentiveType }) => {
  const selectedOption = getSelectedIncentiveByValue(intentiveType);

  const filtersWithActive = incentiveOptions.map((o) => ({
    ...o,
    active: o.value === selectedOption.value,
  }));
  return (
    <>
      <IncentiveSelectContainer>
        <Typography variant="overline" color="gray700">
          Filtros:
        </Typography>
        <ChipFilters filters={filtersWithActive} onClickFilter={(item) => onSelect(item)} />
      </IncentiveSelectContainer>
    </>
  );
};

export default IncentiveSelect;
