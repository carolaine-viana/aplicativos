import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../../src/@types/navigation';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/LoginPage/SignIn';
import { LoginPage } from '../screens/LoginPage';
import { Register } from '../screens/LoginPage/Register';
import { ConfirmSignUp, ForgotPassword } from '../screens/LoginPage/ForgotPassword';


const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function AuthRoutes() {
    return (
        <Navigator initialRouteName="LoginPage">
            <Screen
                name="Splash"
                component={Splash}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name="LoginPage"
                component={LoginPage}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false,
                }}
            />

        </Navigator>
    )
}