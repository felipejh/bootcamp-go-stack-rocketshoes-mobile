import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from './services/navigation';

import store from './store';

import Routes from './routes';

export default function App() {
  return (
    <NavigationContainer
      ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
    >
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}
