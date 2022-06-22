import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';
import codePush from 'react-native-code-push';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import store from 'shared/redux/reduxStore';
import theme from '@shared/constants/theme';

import Routes from './Routes';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };

  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });
  }, []);

  const renderContent = () => (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider style={backgroundStyle}>
          <Routes />
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
  return <Provider store={store}>{renderContent()}</Provider>;
}

export default codePush({ checkFrequency: codePush.CheckFrequency.ON_APP_RESUME })(App);
