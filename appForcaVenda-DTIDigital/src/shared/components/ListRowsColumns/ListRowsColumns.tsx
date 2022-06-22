import React from 'react';
import { createRowsWithColumns } from 'shared/utils';
import { RowContainer } from './ListRowsColumnsSC';

export interface ListRowsColumnsProps {
  data: unknown[];
  numberOfColumns?: number;
  marginBetweenRows?: number;
  renderItem?: (item: unknown) => void;
}

const ListRowsColumns: React.FC<ListRowsColumnsProps> = ({
  data,
  renderItem,
  numberOfColumns = 1,
  marginBetweenRows = 0,
}) => {
  const listRows = createRowsWithColumns(data, numberOfColumns);

  return (
    <>
      {listRows.map((rows, idx) => (
        <RowContainer marginBetweenRows={marginBetweenRows} key={`row-${idx}`}>
          {rows.map((item: unknown) => renderItem?.(item))}
        </RowContainer>
      ))}
    </>
  );
};

export default ListRowsColumns;
