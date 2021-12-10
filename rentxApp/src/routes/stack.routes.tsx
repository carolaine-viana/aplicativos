import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';

// export type RootStackParamList = {
//     Home: undefined;
//     CarDetails: undefined;
//     Scheduling: undefined;
//     SchedulingDetails: undefined;
//     SchedulingComplete: undefined;
// };

import { RootStackParamList } from '../../src/@types/navigation';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/signUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/signUp/SignUpSecondStep';
import { Confirmation } from '../screens/Confirmation';


const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export function StackRoutes(){
    return(
        <Navigator initialRouteName="Home">
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
                    gestureEnabled: false, //nao deixa voltar pra tela de splash
                }}
            />

            <Screen
                name="SignUpFirstStep"
                component={SignUpFirstStep}
                options={{
                    headerShown: false,
                    gestureEnabled: false, //nao deixa voltar pra tela de splash
                }}
            />

            <Screen
                name="SignUpSecondStep"
                component={SignUpSecondStep}
                options={{
                    headerShown: false,
                    gestureEnabled: false, //nao deixa voltar pra tela de splash
                }}
            />


            <Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    gestureEnabled: false, //nao deixa voltar pra tela de splash
                }}
            />

            <Screen
                name="CarDetails"
                component={CarDetails}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name="Scheduling"
                component={Scheduling}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name="SchedulingDetails"
                component={SchedulingDetails}
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

            <Screen
                name="MyCars"
                component={MyCars}
                options={{
                    headerShown: false,
                }}
            />
        </Navigator>
    )
}