import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Feed } from '../screens/Feed';
import { DetailProduct } from '../screens/DetailProduct';
import { FilterClothes } from '../screens/FilterClothes';
import { BuyNow } from '../screens/BuyNow';

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes(){ 
     return(
        <Navigator initialRouteName="Splash">
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

        </Navigator>
       )
} 
