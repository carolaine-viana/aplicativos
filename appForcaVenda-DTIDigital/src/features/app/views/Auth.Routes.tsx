import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '@features/login';

const Stack = createStackNavigator();

interface Props {
  onLogin: () => Promise<void>;
}

const AuthRoutes = ({ onLogin }: Props) => {
  const LoginComponent = () => <Login onLogin={onLogin} />;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginComponent} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
