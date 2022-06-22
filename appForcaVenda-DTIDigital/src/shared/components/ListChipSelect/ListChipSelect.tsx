import React from 'react';
import { IPalette } from 'shared/types/IThemeInterface';
import { mountChipOpbject } from '@shared/utils';
import ChipSelect, { ChipSelectProps } from '../ChipSelect/ChipSelect';
import ListRowsColumns, { ListRowsColumnsProps } from '../ListRowsColumns/ListRowsColumns';

interface ListChipSelectProps extends Partial<ListRowsColumnsProps> {
  chips: string[] | Partial<ChipSelectProps>[];
  onSelected: (card: string) => void;
  selectedCard: string;
  activeColor?: keyof IPalette;
}

const ListChipSelect: React.FC<ListChipSelectProps> = ({
  chips,
  onSelected,
  selectedCard,
  activeColor = 'blue600',
  numberOfColumns = 3,
  marginBetweenRows = 16,
}) => {
  const data = mountChipOpbject<Partial<ChipSelectProps>>(chips, activeColor);

  return (
    <ListRowsColumns
      numberOfColumns={numberOfColumns}
      marginBetweenRows={marginBetweenRows}
      data={data}
      renderItem={(item) => {
        const castedItem = item as ChipSelectProps;
        return (
          <ChipSelect
            key={castedItem.text}
            disabled={!!castedItem.disabled}
            activeColor={castedItem.activeColor || activeColor}
            text={(castedItem.text || castedItem) as string}
            selected={item === selectedCard || castedItem.text === selectedCard}
            onPress={() => onSelected((castedItem.text || castedItem) as string)}
          />
        );
      }}
    />
  );
};

export default ListChipSelect;
