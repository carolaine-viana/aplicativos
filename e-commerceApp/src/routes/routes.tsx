import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { LoginPage } from '../screens/LoginPage';
import { Feed } from '../screens/Feed';
import { DetailProduct } from '../screens/DetailProduct';
import { FilterClothes } from '../screens/FilterClothes';
import { BuyNow } from '../screens/BuyNow';
import { Splash } from '../screens/Splash';
import { Register } from '../screens/LoginPage/Register';
import { ConfirmSignUp } from '../screens/ConfirmSignUp';

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes(){ 
     return(
        <Navigator initialRouteName="Splash">
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
                name="Feed"
                component={Feed}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name="DetailProduct"
                component={DetailProduct}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name="FilterClothes"
                component={FilterClothes}
                options={{
                    headerShown: false,
                }}
            />

            <Screen
                name="BuyNow"
                component={BuyNow}
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
                name="ConfirmSignUp"
                component={ConfirmSignUp}
                options={{
                    headerShown: false,
                }}
            />

        </Navigator>
       )
} 
