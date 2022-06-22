import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RoutesNames } from 'shared/types';
import PrivacyPolicy from '@features/privacyPolicy/views/PrivacyPolicy';
import Dashboard from './Dashboard';
import DashDetail from './DashDetail';
import WildCardFocusDetails from '../../suppliers/views/WildCardFocusDetails';
import ServedCustomers from '../../servedCustomers/views/ServedCustomers';
import Statement from '../../statement/views/Statement';
import IncentivesStack from '../../incentives/views/IncentivesStack';
import BEM from '../../BEM/views/BEM';
import SAC from '../../SAC/views/SAC';
import SACWebView from '../../SAC/views/SACWebView';
import Notifications from '../../notifications/views/Notifications';
import NotificationDetails from '../../notifications/views/NotificationDetails';
import Orders from '../../Order/views/Orders';

const PrivacyPolicyComponent = () => <PrivacyPolicy fromMenu />;

const Stack = createStackNavigator();

const DashboardStack: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={RoutesNames.DASHBOARD}>
    <Stack.Screen name={RoutesNames.DASHBOARD} component={Dashboard} />
    <Stack.Screen name={RoutesNames.DASHDETAIL} component={DashDetail} />
    <Stack.Screen name={RoutesNames.WILDFOCUSDETAILS} component={WildCardFocusDetails} />
    <Stack.Screen name={RoutesNames.SERVEDCUSTOMERS} component={ServedCustomers} />
    <Stack.Screen name={RoutesNames.STATEMENT} component={Statement} />
    <Stack.Screen name={RoutesNames.INCENTIVES} component={IncentivesStack} />
    <Stack.Screen name={RoutesNames.BEM} component={BEM} />
    <Stack.Screen name={RoutesNames.SAC} component={SAC} />
    <Stack.Screen name={RoutesNames.SACWEBVIEW} component={SACWebView} />
    <Stack.Screen name={RoutesNames.NOTIFICATIONS} component={Notifications} />
    <Stack.Screen name={RoutesNames.NOTIFICATION_DETAILS} component={NotificationDetails} />
    <Stack.Screen name={RoutesNames.ORDERS} component={Orders} />
    <Stack.Screen name={RoutesNames.PRIVACYPOLICY} component={PrivacyPolicyComponent} />
  </Stack.Navigator>
);

export default DashboardStack;
