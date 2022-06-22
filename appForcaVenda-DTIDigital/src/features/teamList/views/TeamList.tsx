import React, { useCallback, useMemo, useState } from 'react';
import {
  SearchHeader,
  Divider,
  CustomStatusBar,
  CardActions,
  FallbackWrapper,
} from '@shared/components';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Keyboard } from 'react-native';
import { usePromise } from 'shared/hooks';
import { joinGTRegions } from 'features/gtList/gtListUtils';
import { isArrayEmpty } from 'shared/utils';
import { IGV, TAlphabeticalSort } from 'shared/types';
import { Container, ContainerCards } from './TeamListSC';
import TeamFilter from './TeamFilter';
import TeamListManager from '../services/TeamListManager';
import { filterTeam } from '../teamUtils';

const manager = new TeamListManager();

interface TeamListProps {
  type: string;
}

const TeamList: React.FC<TeamListProps> = () => {
  const theme = useTheme();
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const [loadingFilter, setLoadingFilter] = useState(false);
  const [profile, setProfile] = useState('0');

  const loadData = useCallback(() => manager.getGTRCA(profile), [profile]);

  const { data, ...promiseStatus } = usePromise<Array<IGV>>(loadData);
  const [sortMode, setsortMode] = useState<TAlphabeticalSort>('az');

  const handleCloseSearch = () => {
    setSearchText('');
    Keyboard.dismiss();
  };

  const renderProfile = (id: IGV, name: IGV, regions: IGV, type: string) => {
    if (type === 'GT') {
      return navigation.navigate('GtProfile', { id, name, regions });
    }
    if (type === 'RCA') {
      return navigation.navigate('RCAProfile', {
        rca: {
          id,
          name,
          territories: [
            {
              id: '000',
              name: regions,
            },
          ],
        },
      });
    }
  };

  const renderTeamList = (
    id: IGV,
    name: IGV,
    regions: IGV,
    type: string,
    territoryManagerId: IGV,
    territoryManagerName: IGV
  ) => {
    if (type === 'GT') {
      return navigation.navigate('TeamGvGT', { id, name, regions });
    }
    if (type === 'RCA') {
      return navigation.navigate('TeamRcaGV', {
        territoryManagerId,
        territoryManagerName,
        name,
        regions,
      });
    }
  };

  const renderItem = ({
    id,
    name,
    regions,
    type,
    territoryManagerId,
    territoryManagerName,
  }: IGV) => {
    return (
      <CardActions
        userName={name}
        localization={joinGTRegions(regions)}
        mainLabel={`${type === 'GT' ? 'Perfil do GT' : 'Perfil do RCA'}`}
        secondLabel={`${type === 'GT' ? 'Ver equipe' : 'Ver gestor'}`}
        onMainAction={() => renderProfile(id, name, regions, type)}
        onSecondAction={() =>
          renderTeamList(id, name, regions, type, territoryManagerId, territoryManagerName)
        }
      />
    );
  };

  const renderFilterData = useMemo(
    () => filterTeam(searchText, data),
    [searchText, sortMode === 'az' ? data : data?.reverse()]
  );

  return (
    <>
      <CustomStatusBar backgroundColor={theme.palette.white} barStyle="dark-content" />
      <SearchHeader
        headerProps={{
          title: 'Equipe',
        }}
        onClickArrow={() => navigation.goBack()}
        searchProps={{
          onChangeText: (text: string) => {
            setSearchText(text);
          },
          onClose: handleCloseSearch,
          value: searchText,
          searchPlaceholder: 'Buscar Perfil',
        }}
      />
      <Container>
        <TeamFilter
          setProfile={setProfile}
          sortMode={sortMode}
          onSelectSortMode={(mode) => setsortMode(mode.value)}
        />
        <Divider color="blue100" width="90%" />
        <ContainerCards>
          <FallbackWrapper
            {...promiseStatus}
            showEmptyState={
              promiseStatus.success && (!renderFilterData || isArrayEmpty(renderFilterData))
            }
            loading={promiseStatus.loading || loadingFilter}
            loadingComponent="spinner"
            renderContent={() => (
              <ContainerCards>
                <FlatList
                  renderItem={({ item }) => renderItem(item)}
                  keyExtractor={(item) => `${item.id}`}
                  data={renderFilterData}
                />
              </ContainerCards>
            )}
          />
        </ContainerCards>
      </Container>
    </>
  );
};

export default TeamList;
