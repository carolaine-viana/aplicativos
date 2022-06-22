import React from 'react';
import { SelectedWeekTag, SelectedWeekTagText } from './ServedCustomersFiltersSC';

interface ServedCustomersFilterTagProps {
  ptBRFormat: Date | string;
}

const ServedCustomersFilterTag: React.FC<ServedCustomersFilterTagProps> = ({ ptBRFormat }) => {
  const label = `Semana ${ptBRFormat.toString()}`;
  return (
    <SelectedWeekTag>
      <SelectedWeekTagText variant="bodyMedium" color="light">
        {label}
      </SelectedWeekTagText>
    </SelectedWeekTag>
  );
};

export default ServedCustomersFilterTag;
