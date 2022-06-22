import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, CommonActions } from '@react-navigation/native';
import theme from '@shared/constants/theme';
import { useRoleInfo, useSetupFlags } from 'shared/hooks';
import { filterRoutesByRole } from '../appUtils';

const Tab = createBottomTabNavigator();
const BottomTabs: React.FC = () => {
  const navigation = useNavigation();
  const { roleInfo } = useRoleInfo();

  const filtredRoutes = filterRoutesByRole(roleInfo.role);

  useSetupFlags();

  return (
    roleInfo && (
      <Tab.Navigator
        initialRouteName="Painel"
        tabBarOptions={{
          tabStyle: { backgroundColor: theme.palette.blue600 },
          activeTintColor: theme.palette.orange300,
          inactiveTintColor: theme.palette.white,
          labelStyle: { marginBottom: theme.layout.marginMenu },
          style: { backgroundColor: theme.palette.blue600 },
        }}
      >
        {filtredRoutes.map((route) => (
          <Tab.Screen
            key={route.name}
            component={route.component}
            name={route.name}
            testID={route.testID}
            options={{
              tabBarButton: (props) => (
                <RectButton
                  {...props}
                  onPress={() =>
                    navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [{ name: route.navigateTo }],
                      })
                      // eslint-disable-next-line prettier/prettier
                    )}
                />
              ),
              tabBarIcon: ({ color }: { color: string }) => (
                <Icon
                  name={route.iconName}
                  color={color}
                  size={24}
                  style={{ marginTop: theme.layout.marginMenu }}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    )
  );
};

export default BottomTabs;
