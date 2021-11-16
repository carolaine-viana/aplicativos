import React from "react";
import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";
import { StatusBar} from "react-native";

import { AppRoutes } from "./src/components/Routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";

import AppLoading from "expo-app-loading";
import {
  useFonts, 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { SignIn } from "./src/screens/SignIn";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return(
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content"/>
        <SignIn/>
      </NavigationContainer>
   </ThemeProvider>
  ) 
}
