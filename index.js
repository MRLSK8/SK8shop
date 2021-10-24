import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

LogBox.ignoreLogs(['Require cycle:']);

AppRegistry.registerComponent(appName, () => App);
