import React from 'react';
import { Pressable } from 'react-native';
import { Divider, FallbackWrapper, Typography } from '@shared/components';
import {
  WeeksFilterContainer,
  WeekChip,
  WeeksFilterContent,
  WeeksFilterWrapper,
} from './ServedCustomersFiltersSC';
import { IServedCustomersState } from '../redux/servedCustomersSlice';
import { useSelectedWeek } from '../hooks/useSelectedWeek';

interface ServedCustomersWeeksFilterProps {
  isOpen: boolean;
  weeks: IServedCustomersState['selectedWeek'][];
  closeModal: () => void;
  promiseStatus: {
    loading: boolean;
    done: boolean;
    success: boolean;
    error: boolean;
  };
}

const ServedCustomersWeeksFilter: React.FC<ServedCustomersWeeksFilterProps> = ({
  isOpen,
  weeks,
  closeModal,
  promiseStatus,
}) => {
  const { setSelectedWeek, selectedWeek } = useSelectedWeek();

  const onConfirm = (w: IServedCustomersState['selectedWeek']) => {
    setSelectedWeek(w);
    setTimeout(() => {
      closeModal();
    }, 100);
  };

  return (
    <FallbackWrapper
      {...promiseStatus}
      loadingComponent="spinner"
      renderContent={() => (
        <WeeksFilterContainer isOpen={isOpen}>
          <WeeksFilterWrapper>
            <WeeksFilterContent>
              {weeks.map((w) => {
                const isSelected = selectedWeek.ptBRFormat === w.ptBRFormat;
                return (
                  <Pressable onPress={() => onConfirm(w)} key={w.ptBRFormat}>
                    <WeekChip selected={isSelected}>
                      <Typography
                        variant="bodyMedium"
                        uppercase
                        color={isSelected ? 'light' : 'gray700'}
                      >
                        SEM {w.ptBRFormat}
                      </Typography>
                    </WeekChip>
                  </Pressable>
                );
              })}
            </WeeksFilterContent>
          </WeeksFilterWrapper>
          <Divider />
        </WeeksFilterContainer>
      )}
    />
  );
};
export default ServedCustomersWeeksFilter;
