import React from 'react';
import 'react-native-gesture-handler';

import { useFonts} from '@expo-google-fonts/nunito-sans';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

import { Routes } from './src/routes';
import { Feed } from './src/screens/Feed';


function App() {
  const [fontsLoaded] = useFonts({
    'NunitoSans_400Regular': require('./src/fonts/nunito/NunitoSans-Regular.ttf'),
    'NunitoSans_800ExtraBold': require('./src/fonts/nunito/NunitoSans-ExtraBold.ttf'),
    'NunitoSans_700Bold': require('./src/fonts/nunito/NunitoSans-Bold.ttf'),
    'NunitoSans_600SemiBold': require('./src/fonts/nunito/NunitoSans-SemiBold.ttf'),
    'Halant_500Medium': require('./src/fonts/halant/Halant-Medium.ttf'),
  })
  
  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
      <ThemeProvider theme={theme}>
        <Routes/>
    </ThemeProvider>
  )
}

export default App;

