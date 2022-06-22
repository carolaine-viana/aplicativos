/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TutorialDetail from '@features/tutorial/views/TutorialDetail';
import { RoutesNames } from 'shared/types';
import { DrawerComponent } from './Drawer';
import BottomTabs from './BottomTabs';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerStyle={{ width: '80%' }}
      drawerContent={(props) => <DrawerComponent {...props} />}
    >
      <Drawer.Screen name="BottomTabs" component={BottomTabs} />
    </Drawer.Navigator>
  );
}

const AppRoutes = () => (
  <Stack.Navigator initialRouteName="Drawer" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Drawer" component={DrawerNavigation} />
    <Stack.Screen name={RoutesNames.TUTORIALDETAIL} component={TutorialDetail} />
  </Stack.Navigator>
);

export default AppRoutes;
