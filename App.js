import React, { Fragment, Component } from 'react';
import { Image, StyleSheet, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './src/components/HomeScreen'
import MonsterInfo from './src/components/MonsterInfo'
import MonsterList from './src/components/MonsterList';
import Loading from './src/components/Loading'
import Login from './src/components/Login'
import Map from './src/components/Map'

export default class App extends Component<{}> {
  render(){
    return (
        <StackNavigator/>
    )  
  }
}

const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  Login: Login,
  Map: Map,
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
