import React, { useState, useMemo } from 'react';
import { TouchableOpacity, FlatList, Modal, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useTheme } from 'styled-components';
import SearchBar, { SearchProps } from '@shared/components/searchBar/SearchBar';
import { TOption } from '@shared/types';
import { searchingOptions } from '@shared/utils';
import Typography from '../Typography/Typography';
import DefaultIcon from '../DefaultIcon/DefaultIcon';
import {
  Container,
  Options,
  ContainerOptions,
  LabelContainer,
  HeaderModal,
  ContainerList,
  SearchContainer,
} from './SelectPickerSC';

interface SelectPickerProps {
  onChangeSelect?: (label?: TOption['label'], value?: TOption['value']) => void;
  options: TOption[];
  label: string;
  searchProps?: SearchProps;
  onClickArrow?: () => void;
  renderItem: (optionLabel: string) => string | React.ReactElement;
}
const SelectPicker: React.FC<SelectPickerProps> = ({
  options,
  onChangeSelect,
  label,
  onClickArrow,
  searchProps,
  renderItem,
}) => {
  const [labelOption, setLabelOption] = useState(label);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<TOption['value']>('');
  const [search, setSearch] = useState('');
  const theme = useTheme();

  const filteredDataSource = useMemo(() => searchingOptions(search, options), [search, options]);

  function renderOption(option: TOption) {
    return (
      <ContainerOptions>
        <Options
          onPress={() => selected(option)}
          testID={option.value as string}
          style={option.value === selectedOption && { backgroundColor: theme.palette.blue50 }}
        >
          <>{renderItem(option.label)}</>
        </Options>
      </ContainerOptions>
    );
  }

  function selected(option: TOption) {
    onChangeSelect?.(option.value);
    setLabelOption(option.label);
    setModalVisible(false);
    setSelectedOption(option.value);
  }
  const handleCloseModal = () => {
    setTimeout(() => {
      setSearch('');
    }, 100);
    setModalVisible(false);
  };

  return (
    <>
      <Container onPress={() => setModalVisible(true)}>
        <LabelContainer>
          <Typography size={14} bold>
            {labelOption}
          </Typography>
          <DefaultIcon name="chevron-down" size={28} color="primary" />
        </LabelContainer>
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <SafeAreaView>
            <HeaderModal>
              <TouchableOpacity onPress={() => handleCloseModal()}>
                <Icon name="x" size={28} color={theme.palette.gray500} />
              </TouchableOpacity>
            </HeaderModal>
            <ContainerList>
              <SearchContainer>
                <SearchBar
                  fixed
                  searchPlaceholder="Buscar incentivo..."
                  onChangeText={(text: string) => {
                    setSearch(text);
                  }}
                  value={search}
                  {...{ ...searchProps, color: 'white' }}
                  fullWidth={!onClickArrow}
                />
              </SearchContainer>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={filteredDataSource}
                keyExtractor={(option, idx) => `${option.value}-${option.label}-${idx}`}
                renderItem={({ item }) => renderOption(item)}
              />
            </ContainerList>
          </SafeAreaView>
        </Modal>
      </Container>
    </>
  );
};

export default SelectPicker;
