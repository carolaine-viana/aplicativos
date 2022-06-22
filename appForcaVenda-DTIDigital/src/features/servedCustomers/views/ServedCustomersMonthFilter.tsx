import React, { useState } from 'react';
import { Modal } from 'react-native';

import { SearchHeader, AccordionList, CalendarButton, DefaultScreen } from '@shared/components';
import { capitalizeText, isArrayEmpty } from 'shared/utils';
import AccordionListItem from 'shared/components/AccordionListItem/AccordionListItem';

import { getCalendarButtonMonth, getMonthsFilters, mountMonthParam } from '../servedCustomersUtils';
import ServedCustomersManager from '../services/ServedCustomersManager';
import { IServedCustomersState } from '../redux/servedCustomersSlice';
import ServedCustomersFilterTag from './ServedCustomersFilterTag';
import { ContainerFilters, MonthButtonContainer } from './ServedCustomersFiltersSC';
import { useSelectedWeek } from '../hooks/useSelectedWeek';
import { useMonthWeeks } from '../hooks/useMonthWeeks';
import ServedCustomersWeeksFilter from './ServedCustomersWeeksFilter';

interface ServedCustomersMonthFilterProps {}

const Manager = new ServedCustomersManager();

type TMonthDateType = ReturnType<typeof getMonthsFilters>[0];

const ServedCustomersMonthFilter: React.FC<ServedCustomersMonthFilterProps> = () => {
  const [weeks, setWeeks] = useState<IServedCustomersState['selectedWeek'][]>([]);

  const [promiseStatus, setPromiseStatus] = useState<{
    loading: boolean;
    done: boolean;
    success: boolean;
    error: boolean;
  }>({
    loading: false,
    done: false,
    success: false,
    error: false,
  });

  const { selectedWeek } = useSelectedWeek();
  const { monthsWeeks, setMonthcWeeksFilters } = useMonthWeeks();
  const [openedItem, setOpenedItem] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const setPromiseDone = (success: boolean, error: boolean) => {
    setPromiseStatus((status) => ({
      ...status,
      loading: false,
      done: true,
      success,
      error,
    }));
  };

  const handleOpenItem = async (itemIndex: number) => {
    try {
      if (itemIndex !== openedItem) {
        setOpenedItem(itemIndex);
      } else {
        setOpenedItem(null);
      }
      setPromiseStatus((status) => ({
        ...status,
        loading: true,
      }));
      if (isArrayEmpty(monthsWeeks[itemIndex].weeks)) {
        const isoDate = monthsWeeks[itemIndex].pureDate;
        const monthParam = mountMonthParam(isoDate);
        const res = await Manager.getMonthWeeks(monthParam);

        setMonthcWeeksFilters({
          idx: itemIndex,
          weeks: res,
        });

        setPromiseDone(true, false);
        setWeeks(res);
      } else {
        setWeeks(monthsWeeks[itemIndex].weeks);
      }
      setPromiseDone(true, false);
    } catch (error) {
      setPromiseDone(false, true);
    }
  };

  const renderItemContent = (idx: number) => {
    if (idx === openedItem) {
      return (
        <ServedCustomersWeeksFilter
          isOpen={openedItem === idx}
          weeks={promiseStatus.loading ? [] : weeks}
          closeModal={() => setModalVisible(false)}
          promiseStatus={promiseStatus}
        />
      );
    }
    return null;
  };

  const renderItem = (item: TMonthDateType, idx: number) => (
    <AccordionListItem
      key={item.label}
      isOpen={idx === openedItem}
      item={{ ...item, label: capitalizeText(item.label) }}
      onOpenItem={() => handleOpenItem(idx)}
      idx={idx}
    >
      {renderItemContent(idx)}
    </AccordionListItem>
  );

  return (
    <>
      <ContainerFilters>
        <MonthButtonContainer>
          <CalendarButton
            onPress={() => setModalVisible(true)}
            monthYear={getCalendarButtonMonth(selectedWeek.pureDate)}
          />
        </MonthButtonContainer>
        <ServedCustomersFilterTag ptBRFormat={selectedWeek.ptBRFormat} />
      </ContainerFilters>

      <Modal
        testID="servedMonthFiltersModal"
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <DefaultScreen statusBarColor="blue50">
          <SearchHeader
            onClickArrow={() => setModalVisible(false)}
            headerProps={{
              title: 'Escolha o mês/semana',
            }}
          />
          <AccordionList
            accordionItems={monthsWeeks.map((item, idx) => ({
              ...item,
              renderItemContent: () => renderItemContent(idx),
              renderItem: () => renderItem(item, idx),
            }))}
          />
        </DefaultScreen>
      </Modal>
    </>
  );
};

export default ServedCustomersMonthFilter;
