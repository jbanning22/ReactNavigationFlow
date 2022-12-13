import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDBCmPTRfSslxj-A199RVSAucg7pn_P4_A',
  authDomain: 'authpractice-d0514.firebaseapp.com',
  projectId: 'authpractice-d0514',
  storageBucket: 'authpractice-d0514.appspot.com',
  messagingSenderId: '715470243193',
  appId: '1:715470243193:web:f31406351573d60aa25ba8',
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
