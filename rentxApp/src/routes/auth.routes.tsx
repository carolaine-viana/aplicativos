import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { RootStackParamList } from '../../src/@types/navigation';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/signUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/signUp/SignUpSecondStep';
import { Confirmation } from '../screens/Confirmation';


const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

export function AuthRoutes() {
    return (
        <Navigator initialRouteName="Splash">
            <Screen
                name="Splash"
                component={Splash}
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

            <Screen
                name="SignUpFirstStep"
                component={SignUpFirstStep}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name="SignUpSecondStep"
                component={SignUpSecondStep}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name="Confirmation"
                component={Confirmation}
                options={{
                    headerShown: false,
                }}
            />

        </Navigator>
    )
}