import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import LandingScreen from './components/LandingScreen';
import SignInScreen from './components/SignInScreen';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import SignUpScreen from './components/SignUpScreen';

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator initialRouteName="Landing">
    <AuthStack.Screen
      name="Landing"
      component={LandingScreen}
      options={{
        title: 'Get Started',
        headerStyle: {
          backgroundColor: 'red',
        },
        headerTintColor: 'black',
      }}
    />
    <AuthStack.Screen
      name="SignInPage"
      component={SignInScreen}
      options={{
        title: 'Login',
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: 'white',
      }}
    />
    <AuthStack.Screen
      name="SignUpPage"
      component={SignUpScreen}
      options={{
        title: 'SignUp',
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: 'black',
      }}
    />
  </AuthStack.Navigator>
);

const AppStack = createNativeStackNavigator();

const AppStackScreen = () => (
  <AppStack.Navigator initialRouteName="Home">
    <AppStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerStyle: {backgroundColor: 'blue'},
        headerTintColor: 'white',
      }}
    />
    <AppStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        title: 'Details',
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: 'white',
      }}
    />
  </AppStack.Navigator>
);
const App = () => {
  const {signedIn} = useSelector(state => state.signIn);
  console.log('value of signed In is: ', signedIn);
  return (
    <NavigationContainer>
      {signedIn === false ? <AuthStackScreen /> : <AppStackScreen />}
    </NavigationContainer>
  );
};

export default App;
