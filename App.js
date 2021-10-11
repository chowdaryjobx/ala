
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUpScreen, LoginScreen, SplashScreen, HomeScreen, DetailScreen } from './src/screens';

import Cart from './src/extras/Cart';

import {AuthContext} from './src/context/DataContext';


const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
  
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
           <Stack.Screen name="Cart" component={Cart} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ()=>{
  return(
    <AuthContext>
      <App />
    </AuthContext>
  );
}

// export default App;