import React from "react";
import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import { StatusBar} from "react-native";

import {Routes} from "./src/Routes";

import {AuthProvider, useAuth} from './src/hooks/auth';

import AppLoading from "expo-app-loading";
import {
  useFonts, 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const {isLoading} = useAuth()

  if(!fontsLoaded || isLoading){
    return <AppLoading/>
  }

  return(
    <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content"/>
        <AuthProvider>
            <Routes/>
        </AuthProvider>
   </ThemeProvider>
  ) 
}
