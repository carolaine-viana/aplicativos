import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { userAuth } from '../hooks/auth';

import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';
import { LoadingAnimation } from '../components/LoadingAnimation';

export function Routes(){ 
   const {user, loading} = userAuth();

     return(
        loading ? <LoadingAnimation/> : 
        <NavigationContainer>
            {user.id ? <AppTabRoutes/> : <AuthRoutes/>}
         </NavigationContainer>
       )
} 
