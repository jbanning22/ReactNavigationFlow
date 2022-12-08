import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';

function HomeScreen({navigation}) {
  const [loginText, setLoginText] = useState();
  return (
    <View style={styles.box1}>
      <Text style={styles.homeText}>Home</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('LoginPage')}>
        <Text style={{fontSize: 18, color: 'white'}}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate('SignUpPage')}>
        <Text style={{fontSize: 18, color: 'black'}}>Sign Up</Text>
      </TouchableOpacity>
      <Button title="Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

function LoginScreen({navigation}) {
  const [usernameText, setUsernameText] = useState();
  const [passwordText, setPasswordText] = useState();
  return (
    <View style={styles.box1}>
      <Text style={styles.homeText}>Welcome Back!</Text>
      <TextInput
        placeholder="Username"
        style={{height: 50, width: 200, padding: 10, backgroundColor: 'white'}}
        value={usernameText}
        onChangeText={setUsernameText}
      />
      <TextInput
        placeholder="Password"
        style={styles.loginTextInput}
        value={passwordText}
        onChangeText={setPasswordText}
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={{fontSize: 18, color: 'white'}}>Log in</Text>
      </TouchableOpacity>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function SignUpScreen({navigation}) {
  return (
    <View style={styles.box1}>
      <Text style={styles.singUpText}>Join the Community</Text>
      <TextInput placeholder="Name" style={styles.emailInput} />
      <TextInput placeholder="Email" style={styles.emailInput} />
      <TextInput
        placeholder="Username"
        style={{height: 50, width: 200, padding: 10, backgroundColor: 'white'}}
        // value={}
        // onChangeText={}
      />
      <TextInput
        placeholder="Password"
        style={styles.loginTextInput}
        // value={}
        // onChangeText={}
      />
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={{fontSize: 18, color: 'white'}}>Log in</Text>
      </TouchableOpacity>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={styles.box1}>
      <Text style={styles.homeText}>Details</Text>
      <Text style={{padding: 20}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed egestas egestas
        fringilla phasellus faucibus scelerisque eleifend donec pretium. Nulla
        facilisi cras fermentum odio eu feugiat pretium. Diam ut venenatis
        tellus in metus vulputate eu. Dignissim suspendisse in est ante in nibh
        mauris cursus mattis. Sed lectus vestibulum mattis ullamcorper velit
        sed. Faucibus et molestie ac feugiat sed. Nunc eget lorem dolor sed.
        Pretium viverra suspendisse potenti nullam ac tortor. Amet dictum sit
        amet justo. Blandit aliquam etiam erat velit scelerisque in.
      </Text>
      <Button
        title="Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Get Started',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTintColor: 'black',
          }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
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
        <Stack.Screen
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeText: {
    fontSize: 40,
    fontWeight: '500',
    fontFamily: 'Helvetica',
    marginBottom: 80,
  },
  singUpText: {
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'Helvetica',
    marginBottom: 80,
  },
  loginButton: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginBottom: 40,
    marginTop: 20,
  },
  signUpButton: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    marginTop: 10,
  },
  loginTextInput: {
    height: 50,
    width: 200,
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
  },
  emailInput: {
    height: 50,
    width: 200,
    padding: 10,
    backgroundColor: 'white',
    // marginTop: 10,
    marginBottom: 10,
  },
});
