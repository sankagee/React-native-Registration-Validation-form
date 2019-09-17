/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStackNavigator, createAppContainer} from 'react-navigation';
AppRegistry.registerComponent(appName, () => App);
