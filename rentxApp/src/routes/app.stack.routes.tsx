import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';


import { RootStackParamList } from '../@types/navigation';
import { MyCars } from '../screens/MyCars';
import { Confirmation } from '../screens/Confirmation';


const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

export function AppStackRoutes(){
    return(
        <Navigator initialRouteName="Home">
         
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