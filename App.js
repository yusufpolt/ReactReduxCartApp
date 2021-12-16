import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/appData/store';
import Home from './src/screens/home/Home';
import {createStackNavigator} from '@react-navigation/stack';
import Basket from './src/screens/basket/basket';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Basket" component={Basket} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
