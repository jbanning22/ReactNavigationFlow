import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {authentication} from '../firebase/firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {useDispatch} from 'react-redux';
import {setSignedIn} from '../redux/signedInSlice';

const SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(re => {
        console.log(re);
        dispatch(setSignedIn(true));
      })
      .catch(re => {
        console.log(re);
      });
  };

  return (
    <View style={styles.box1}>
      <Text style={styles.singUpText}>Join the Community</Text>
      <TextInput placeholder="Name" style={styles.emailInput} />
      <TextInput
        placeholder="Email"
        style={styles.emailInput}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.loginTextInput}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.signUpButton} onPress={registerUser}>
        <Text style={styles.textButton}>Sign Up</Text>
      </TouchableOpacity>
      <Button title="Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  singUpText: {
    fontSize: 30,
    fontWeight: '500',
    fontFamily: 'Helvetica',
    marginBottom: 80,
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
    marginBottom: 10,
  },
  textButton: {
    fontSize: 18,
    color: 'white',
  },
});
