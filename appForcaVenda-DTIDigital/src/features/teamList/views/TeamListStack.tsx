import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GtList from 'features/gtList/views/GtList';
import GtProfile from 'features/gtList/views/GtProfile';
import RCAProfile from 'features/rcaList/views/RCAProfile';
import { RCAsList } from 'features/rcaList';
import TeamList from './TeamList';
import TeamRcaGV from './TeamRcaGV';
import TeamGvGT from './TeamGvGT';

const Stack = createStackNavigator();

const TeamListStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="TeamList">
    <Stack.Screen name="TeamList" component={TeamList} />
    <Stack.Screen name="GtList" component={GtList} />
    <Stack.Screen name="GtProfile" component={GtProfile} />
    <Stack.Screen name="RCAsList" component={RCAsList} />
    <Stack.Screen name="RCAProfile" component={RCAProfile} />
    <Stack.Screen name="TeamRcaGV" component={TeamRcaGV} />
    <Stack.Screen name="TeamGvGT" component={TeamGvGT} />
  </Stack.Navigator>
);

export default TeamListStack;
