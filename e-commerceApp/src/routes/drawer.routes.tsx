import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DetailProduct } from '../screens/DetailProduct';
import { Feed } from '../screens/Feed';
import { FilterClothes } from '../screens/FilterClothes';
import { BuyNow } from '../screens/BuyNow';

const {Navigator, Screen} = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Navigator initialRouteName="Feed">
         <Screen
                name="Feed"
                component={Feed}
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
                name="DetailProduct"
                component={DetailProduct}
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
    
  );
}