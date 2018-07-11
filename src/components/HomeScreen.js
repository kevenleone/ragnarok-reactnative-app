import React, { Fragment, Component } from 'react';
import { Container, Header, Left, Right, Body, Title, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet, Button, AsyncStorage } from 'react-native';

import axios from 'axios'
import HeaderAPP from './HeaderAPP'
import MonsterList from './MonsterList'

export default class HomeScreen extends Component<{}> {
   static navigationOptions = {
        header: null
   }

  state = {
    MonsterList : [
    ]
  }

  getMonsterList = async() => {
    const monster = await fetch(`http://192.168.0.112:3000/monster`)
    const monster_data = await monster.json();

    this.setState({MonsterList: monster_data})
    await AsyncStorage.setItem('@ragnarok:monster', JSON.stringify(monster_data))
  }

  async getMonsterStorage(){
    const monster = JSON.parse(await AsyncStorage.getItem('@ragnarok:monster')) || []
    this.setState({MonsterList: monster})
  }

  async componentDidMount(){
    this.getMonsterList().catch(err => {
      this.getMonsterStorage()
    })
  }
  
  render(){
    return (
      <Container>
      <HeaderAPP navigation={this.props.navigation} HeaderTitle="Ragnarok Online" />
      <View style={styles.container}>
      <Tabs>
        <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="home" /></TabHeading>}>
          <MonsterList navigation={this.props.navigation} MonsterList={this.state.MonsterList}/>
        </Tab>
        <Tab 
          heading={<TabHeading style={styles.tabHeading}>
          <Icon type="FontAwesome" name="bell-o"/>
          </TabHeading>
        }>
        <View>
            <Button title="Oiii" onPress={() => this.props.navigation.navigate('MonsterInfo')} />   
        </View>
        </Tab>
        <Tab 
          heading={<TabHeading style={styles.tabHeading}>
          <Icon type="FontAwesome" name="envelope-o" />
          </TabHeading>
          }>
        </Tab>
      </Tabs>
      </View>
    </Container>
    )  
  }
}

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
