import React from 'react';
import { useRoleInfo } from 'shared/hooks';
import SearchBar, { SearchProps } from './SearchBar';
import DefaultIcon from '../DefaultIcon/DefaultIcon';
import Header, { HeaderProps } from '../DefaultHeader/Header';
import { ArrowContainer } from './SearchBarSC';

interface SearchHeaderProps {
  searchProps?: SearchProps;
  headerProps?: Pick<HeaderProps, 'backgroundColor' | 'title'>;
  onClickArrow?: () => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = (props) => {
  const { searchProps, headerProps, onClickArrow } = props;

  const { roleInfo } = useRoleInfo();

  return (
    <Header
      {...{ ...headerProps, backgroundColor: roleInfo?.isRCA ? 'light' : 'default' }}
      left={
        onClickArrow && (
          <ArrowContainer onPress={onClickArrow}>
            <DefaultIcon name="arrow-left" size={24} color="primary" />
          </ArrowContainer>
        )
      }
      right={
        searchProps && (
          <SearchBar
            {...{ ...searchProps, color: roleInfo?.isRCA ? 'white' : 'gray200' }}
            fullWidth={!onClickArrow}
          />
        )
      }
    />
  );
};

export default SearchHeader;
