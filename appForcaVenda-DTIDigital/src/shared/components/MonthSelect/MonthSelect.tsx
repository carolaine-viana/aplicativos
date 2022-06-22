/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Modal, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { HeaderModal } from '@shared/components/SelectPicker/SelectPickerSC';
import { mount12MonthsLess } from '@shared/utils/generalUtils';
import { TOption } from '@shared/types';

import RadioButton from '../RadioButton/RadioButton';
import DefaultIcon from '../DefaultIcon/DefaultIcon';
import Typography from '../Typography/Typography';

import { ListMonthContainer, RadioButtonContainer, ListMonthContainerTitle } from './MonthSelectSC';

interface MonthSelectProps {
  modalVisible: boolean;
  closeModalVisible?: () => void;
  onSelectMonth: (option: TOption) => void;
  onCloseModal: () => void;
  selectedMonth: TOption;
  placeHolder?: string;
}

const MonthSelect: React.FC<MonthSelectProps> = ({
  modalVisible,
  closeModalVisible,
  onSelectMonth,
  onCloseModal,
  selectedMonth,
  placeHolder = 'Escolha o mês',
}) => {
  function renderOption(option: TOption) {
    return (
      <RadioButtonContainer
        key={option.label}
        testID="radioButtonOption"
        onPress={() => onSelectMonth(option)}
      >
        <RadioButton selected={selectedMonth.value === option.value} />
        <Typography variant="overline" color="gray600" uppercase>
          {option.label}
        </Typography>
      </RadioButtonContainer>
    );
  }

  return (
    <>
      <Modal
        visible={modalVisible}
        onRequestClose={() => closeModalVisible?.()}
        testID="statementModal"
      >
        <SafeAreaView>
          <HeaderModal>
            <TouchableOpacity onPress={onCloseModal}>
              <DefaultIcon name="x" size={28} color="default" />
            </TouchableOpacity>
          </HeaderModal>
          <ListMonthContainer>
            <ListMonthContainerTitle align="center" variant="titleMedium">
              {placeHolder}
            </ListMonthContainerTitle>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: 16,
                alignItems: 'center',
              }}
            >
              {mount12MonthsLess().map((item) => renderOption(item))}
            </ScrollView>
          </ListMonthContainer>
        </SafeAreaView>
      </Modal>
    </>
  );
};

export default MonthSelect;
