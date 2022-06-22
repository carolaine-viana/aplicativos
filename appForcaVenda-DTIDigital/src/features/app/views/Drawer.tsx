import React from 'react';
import { Alert, Image, ScrollView } from 'react-native';
import { useCombineRoleFlags, useRoleInfo, IMenuItem } from '@shared/hooks';
import { DefaultIcon } from '@shared/components';

import { useBestResultModal } from 'shared/hooks/useBestResultModal';
import {
  Container,
  CloseButton,
  MenuItem,
  MenuItemText,
  MenuItemIcon,
  MenuList,
  Content,
  MenuDescriptionText,
  ContentItem,
  Item,
} from './DrawerSC';

import { version } from '../../../../package.json';

interface DrawerComponentProps {
  navigation: {
    closeDrawer: () => void;
  };
}

export const DrawerComponent: React.FC<DrawerComponentProps> = ({ navigation }) => {
  const { signOut, roleInfo } = useRoleInfo();

  const handleSignOut = async () => {
    await signOut?.();
  };

  function handleLogout() {
    Alert.alert('Tem certeza que deseja sair?', '', [
      {
        text: 'Não',
        style: 'cancel',
      },
      { text: 'Sim', onPress: handleSignOut },
    ]);
  }

  const { setModalVisible } = useBestResultModal();

  const menuList = useCombineRoleFlags(roleInfo, version, handleLogout, setModalVisible, true);

  const rendeItem = (item: IMenuItem) => (
    <MenuList
      onPress={() => {
        navigation.closeDrawer();
        item.action();
      }}
      key={item.title}
    >
      <Content>
        <MenuItem>
          <MenuItemIcon>
            {item.icontImg ? (
              <Image source={item.icontImg} />
            ) : (
              <DefaultIcon name={item.iconName as string} size={20} color="primary" />
            )}
          </MenuItemIcon>
        </MenuItem>
        <ContentItem>
          <Item>
            <MenuItemText color="blue300" variant="bodyMedium">
              {item.title}
            </MenuItemText>
            <MenuDescriptionText>{item.description}</MenuDescriptionText>
          </Item>
          <DefaultIcon name="chevron-right" size={24} color="primary" />
        </ContentItem>
      </Content>
    </MenuList>
  );

  return (
    <Container>
      <CloseButton onPress={() => navigation.closeDrawer()}>
        <DefaultIcon name="x" size={24} />
      </CloseButton>

      <ScrollView showsVerticalScrollIndicator={false}>
        {menuList.map((item) => item.shouldRender && rendeItem(item))}
      </ScrollView>
    </Container>
  );
};
