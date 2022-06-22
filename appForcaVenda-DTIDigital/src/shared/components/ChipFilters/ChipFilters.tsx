import React, { useRef } from 'react';
import { Pressable, ScrollView } from 'react-native';
import { TOption } from 'shared/types';
import { TPaletteKeyColors } from 'shared/types/IThemeInterface';
import Typography from '../Typography/Typography';
import { ChipItem, ListChips } from './ChipFiltersSC';

export interface IChipItem extends Partial<TOption> {
  renderItem?: () => void;
  active: boolean;
  activeColor?: TPaletteKeyColors;
}

export interface IChipFiltersProps {
  filters: IChipItem[];
  onClickFilter: (item: TOption) => void;
  scrollBack?: boolean;
}

const ChipFilters: React.FC<IChipFiltersProps> = ({ filters, onClickFilter, scrollBack }) => {
  const scrollRef = useRef<ScrollView>(null);

  const handleOnClickFilter = (item: any) => {
    if (scrollBack) {
      if (scrollRef?.current) {
        scrollRef.current?.scrollTo({
          x: 0,
          animated: true,
        });
      }
    }

    onClickFilter(item);
  };

  const renderChipItem = (item: IChipItem, idx: number) => {
    if (item.renderItem) {
      return item.renderItem();
    }

    const { value, active, activeColor, label } = item;
    return (
      <Pressable onPress={() => handleOnClickFilter(item)} key={value} testID={label}>
        <ChipItem
          active={active}
          activeColor={activeColor}
          last={idx === filters.length - 1}
          first={idx === 0}
        >
          <Typography variant="overline" color={active ? 'white' : 'gray700'} align="center">
            {' '}
            {label ?? 'text'}
          </Typography>
        </ChipItem>
      </Pressable>
    );
  };
  return (
    <>
      <ListChips ref={scrollRef} horizontal showsHorizontalScrollIndicator={false}>
        {filters.map((item, idx) => renderChipItem(item, idx))}
      </ListChips>
    </>
  );
};

export default ChipFilters;
