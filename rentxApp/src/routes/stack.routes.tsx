import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';

export type RootStackParamList = {
    Home: undefined;
    CarDetails: undefined;
    Scheduling: undefined;
    SchedulingDetails: undefined;
    SchedulingComplete: undefined;
};

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes(){
    return(
        <Navigator>
            <Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
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
                name="SchedulingComplete"
                component={SchedulingComplete}
                options={{
                    headerShown: false,
                  }}
            />
        </Navigator>
    )
}