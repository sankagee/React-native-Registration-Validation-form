import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './components/home.js';
import Main from './components/main.js';
import Signup from './components/signup.js';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Main: {
    screen: Main,
  },
  Signup: {
    screen: Signup,
  },
});

export default createAppContainer(AppNavigator);
