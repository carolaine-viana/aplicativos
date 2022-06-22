import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RCAProfile from 'features/rcaList/views/RCAProfile';
import RCAsList from './RCAsList';

const Stack = createStackNavigator();

interface RCAListStackProps {}

const RCAListStack: React.FC<RCAListStackProps> = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="RCAList">
    <Stack.Screen name="RCAList" component={RCAsList} />
    <Stack.Screen name="RCAProfile" component={RCAProfile} />
  </Stack.Navigator>
);

export default RCAListStack;
