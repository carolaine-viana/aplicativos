import React from 'react';
import theme from './src/styles/theme';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import 'react-native-gesture-handler';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_800ExtraBold,
  Nunito_700Bold,
  Nunito_600SemiBold
} from '@expo-google-fonts/nunito';

import {Halant_500Medium} from '@expo-google-fonts/halant';

import { Routes } from './src/routes';
import { AuthContext } from './src/services/AuthContext';


export default function App() {
  // const [fontsLoaded] = useFonts({
  //   useFonts,
  //   Nunito_400Regular,
  //   Nunito_800ExtraBold,
  //   Nunito_700Bold,
  //   Nunito_600SemiBold,
  //   Halant_500Medium
  // })
  
  //if(!fontsLoaded){
    //return <AppLoading/>
  //}
  
 
  return (
    <AuthContext.Provider value={[]}>
      <ThemeProvider theme={theme}>
        <Routes/>
    </ThemeProvider>
    </AuthContext.Provider>
  )
}

