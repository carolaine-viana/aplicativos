import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GtProfile from 'features/gtList/views/GtProfile';
import GtList from './GtList';

const Stack = createStackNavigator();

interface GtListStackProps {}

const GtListStack: React.FC<GtListStackProps> = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="GtList">
    <Stack.Screen name="GtList" component={GtList} />
    <Stack.Screen name="GtProfile" component={GtProfile} />
  </Stack.Navigator>
);

export default GtListStack;
