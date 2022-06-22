import React from 'react';
import { ICustomerReadDto } from 'shared/models/Customer';
import { ContainerCards, CustomersList } from './CustomerListSC';

interface ListCardsProps {
  height: number;
  filteredDataSource: Array<ICustomerReadDto>;
  renderItem: (customer: ICustomerReadDto) => void;
  flatListRef: any;
  onScroll?: (event: any) => void;
}

const ListCards: React.FC<ListCardsProps> = (props) => {
  const { filteredDataSource, renderItem, flatListRef, onScroll } = props;
  const getItem = (data: ICustomerReadDto[], index: number) => ({
    ...data[index],
  });

  return (
    <ContainerCards testID="customerList">
      <CustomersList
        ref={flatListRef}
        showsVerticalScrollIndicator={false}
        data={filteredDataSource}
        keyExtractor={(item, index) => item.id?.toString() ?? `customer-${index}`}
        renderItem={(listItem) => renderItem(listItem.item)}
        initialNumToRender={4}
        maxToRenderPerBatch={10}
        getItemCount={() => filteredDataSource?.length}
        getItem={getItem}
        getItemLayout={(_, index) => ({
          length: props.height,
          offset: props.height * index,
          index,
        })}
        onScroll={onScroll}
      />
    </ContainerCards>
  );
};

function areEqual(prevProps: ListCardsProps, nextProps: ListCardsProps) {
  return prevProps.filteredDataSource === nextProps.filteredDataSource;
}
export default React.memo(ListCards, areEqual);
