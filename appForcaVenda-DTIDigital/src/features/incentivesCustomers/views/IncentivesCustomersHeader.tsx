import React from 'react';
import SearchBar, { SearchProps } from '@shared/components/searchBar/SearchBar';
import { SearchContainer, Title, ContainerTitle, HeaderContainer } from './IncentivesCustomersSC';

interface IncentivesCustomersHeaderProps {
  searchProps?: SearchProps;
  onClickArrow?: () => void;
  hasCustomers?: any;
  setIsSearching?: any;
  isKeyBoardOpen?: boolean;
  search?: any;
  setSearch?: any;
}

const IncentivesCustomersHeader: React.FC<IncentivesCustomersHeaderProps> = ({
  searchProps,
  onClickArrow,
  hasCustomers,
  isKeyBoardOpen,
  setIsSearching,
  search,
  setSearch,
}) => (
  <HeaderContainer>
    {hasCustomers ? (
      <SearchContainer isKeyBoardOpen={isKeyBoardOpen}>
        <SearchBar
          onSearch={() => setIsSearching(true)}
          fixed
          searchPlaceholder="Buscar Clientes Participantes..."
          onChangeText={(text: string) => {
            setSearch(text);
            if (!text) {
              setIsSearching(false);
            }
          }}
          value={search}
          {...{ ...searchProps, color: 'white' }}
          fullWidth={!onClickArrow}
        />
      </SearchContainer>
    ) : (
      <ContainerTitle>
        <Title size={14} color="gray600" align="center" variant="bodyMedium">
          {'SEM DEFINIÇÕES PARA\nCLIENTES ESPECÍFICOS'}
        </Title>
      </ContainerTitle>
    )}
  </HeaderContainer>
);

export default IncentivesCustomersHeader;
