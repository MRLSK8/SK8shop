import 'react-native-gesture-handler';
import '@react-native-firebase/app';

import firestore from '@react-native-firebase/firestore';
import { LogBox, AppRegistry } from 'react-native';

import App from './src';
import {
  name as appName
} from './app.json';

// uncomment this to use firestore emulator
// if (__DEV__) {
//   firestore().useEmulator('localhost', 8080);
// }

LogBox.ignoreLogs(['Require cycle:']);

AppRegistry.registerComponent(appName, () => App);
