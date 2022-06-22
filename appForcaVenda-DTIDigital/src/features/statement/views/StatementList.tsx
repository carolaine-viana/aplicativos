import React, { useMemo, useState } from 'react';
import { FlatList } from 'react-native';
import { CardTabs } from 'shared/components';

import { getFilterReceiptTabs } from 'shared/utils';
import { searchingStatements } from '../statementUtils';
import StatementItem from './StatementItem';

interface StatementListProps {
  search: string;
  statementEarnings: any;
  renderContent?: () => {};
}

const StatementList: React.FC<StatementListProps> = ({ search, statementEarnings }) => {
  const filteredDataSource = useMemo(
    () => searchingStatements(search, statementEarnings),
    [search, statementEarnings]
  );
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'credito' | 'debito'>('todos');

  const handleChangeTab = (tab: string) => {
    setSelectedFilter(tab);
  };

  const renderContentFilter = () => {
    const isCredit = selectedFilter === 'credito';
    const isDebit = selectedFilter === 'debito';

    const dadosFiltrados = filteredDataSource.filter((value) => {
      if (isCredit) {
        return Number(value.entryAmount) > 0;
      }
      if (isDebit) {
        return Number(value.entryAmount) < 0;
      }
      return true;
    });

    return (
      <FlatList
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={dadosFiltrados}
        renderItem={({ item }) => <StatementItem statement={item} />}
        keyExtractor={(item) => `${item?.entryDescription}-${item?.entryAmount}`}
      />
    );
  };

  return (
    <>
      <CardTabs
        isFilter
        tabs={Object.values(getFilterReceiptTabs())}
        selectedTab={selectedFilter}
        onChangeTab={handleChangeTab}
        renderContent={renderContentFilter}
      />
    </>
  );
};

export default React.memo(
  StatementList,
  (p, n) => p.statementEarnings === n.statementEarnings && p.search === n.search
);
