import React from 'react';
import 'react-native-gesture-handler';

import { useFonts, NunitoSans_400Regular, NunitoSans_800ExtraBold, NunitoSans_700Bold, NunitoSans_600SemiBold} from '@expo-google-fonts/nunito-sans';
import {Halant_500Medium} from '@expo-google-fonts/halant';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

import { Routes } from './src/routes';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import { Register } from './src/screens/LoginPage/Register';
import { Feed } from './src/screens/Feed';
Amplify.configure(config);
// import { withAuthenticator } from 'aws-amplify-react-native';

function App() {
  // const [fontsLoaded] = useFonts({
  //   NunitoSans_400Regular,
  //   NunitoSans_800ExtraBold,
  //   NunitoSans_700Bold,
  //   NunitoSans_600SemiBold,
  //   Halant_500Medium
  // })
  
  // if(!fontsLoaded){
  //   return <AppLoading/>
  // }
  
  return (
      <ThemeProvider theme={theme}>
        <Routes/>
    </ThemeProvider>
  )
}

export default App;

