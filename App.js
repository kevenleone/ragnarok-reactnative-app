import React, { Fragment, Component } from 'react';
import { Image, StyleSheet, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './src/components/HomeScreen'
import MonsterInfo from './src/components/MonsterInfo'
import MonsterList from './src/components/MonsterList';

export default class App extends Component<{}> {
  static navigationOptions = {
    header: null
}
  render(){
    return (
        <StackNavigator/>
    )  
  }
}

const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  MonsterInfo: MonsterInfo,
  MonsterList: MonsterList,
})

const styles = StyleSheet.create({
  tabHeading: {
    backgroundColor: "#7159C1",
  },
  header: { 
    backgroundColor: "#7159C1",
  },
  container: {
    flex: 1,
  }
});
