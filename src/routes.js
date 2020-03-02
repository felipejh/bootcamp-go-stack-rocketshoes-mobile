import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

import colors from './styles/colors';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: colors.dark,
        // },
        header: navigation => <Header {...navigation} />,
        cardStyle: {
          backgroundColor: colors.dark,
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

const Routes = StackNavigator;

export default Routes;
