import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MyDrawer} from './drawer.routes'
import { AuthRoutes } from './auth.routes';
import auth from '@react-native-firebase/auth'

type User = {
   id: string;
}

export function Routes(){ 
   const [user, setUser] = useState<User | null>(null)


   useEffect(() => {
      const subscriber = auth().onAuthStateChanged((userInfo: any) => {
         setUser(userInfo)
         console.log('oiii', user)
      })
      return subscriber
   }, [])

     return(
        <NavigationContainer>
           {user ? <MyDrawer/> : <AuthRoutes/>}
          {/* <AuthRoutes/> */}
        </NavigationContainer>
       )
} 
