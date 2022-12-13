import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {authentication} from '../firebase/firebase-config';
import {useDispatch} from 'react-redux';
import {setSignedIn} from '../redux/signedInSlice';

const SignInScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(pizza => {
        dispatch(setSignedIn(true));
        console.log(pizza);
      })
      .catch(re => {
        console.log(re);
      });
  };

  return (
    <View style={styles.box1}>
      <Text style={styles.homeText}>Welcome Back!</Text>
      <TextInput
        placeholder="Email"
        style={styles.loginTextInput}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.loginTextInput}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton} onPress={signInUser}>
        <Text style={styles.textButton}>Log in</Text>
      </TouchableOpacity>
      <Button title="Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default SignInScreen;

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
  loginButton: {
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    marginBottom: 40,
    marginTop: 20,
  },
  loginTextInput: {
    height: 50,
    width: 200,
    padding: 10,
    backgroundColor: 'white',
    marginTop: 10,
  },
  textButton: {
    fontSize: 18,
    color: 'white',
  },
});
