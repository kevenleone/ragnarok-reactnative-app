import React, { Fragment, Component } from 'react';
import { Container, Header, Left, Right, Body, Title, Icon, View, Fab, List, ListItem, Thumbnail, Text, Badge, Content, Tab, Tabs, TabHeading, Card, CardItem } from 'native-base';
import { Image, StyleSheet, Button, AsyncStorage } from 'react-native';

import HeaderAPP from './HeaderAPP'
import MonsterList from './MonsterList'
import Loading from './Loading'
import { API } from '../utils/API'

export default class HomeScreen extends Component<{}> {
   static navigationOptions = {
        header: null
   }

  state = {
    MonsterList : [],
    loaded: false
  }

  getMonsterList = async() => {
    const monster = await fetch(`${API.IP}/monster`)
    const monster_data = await monster.json();

    this.setState({MonsterList: monster_data, loaded: true})
    await AsyncStorage.setItem('@ragnarok:monster', JSON.stringify(monster_data))
  }

  async getMonsterStorage(){
    const monster = JSON.parse(await AsyncStorage.getItem('@ragnarok:monster')) || []
    this.setState({MonsterList: monster, loaded: true})
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
        {
          this.state.loaded ? 
          <MonsterList navigation={this.props.navigation} MonsterList={this.state.MonsterList}/>
          : <Loading text="Loading Monsters..." />
          
        }
        </Tab>
        <Tab 
          heading={<TabHeading style={styles.tabHeading}>
          <Icon type="FontAwesome" name="bell-o"/>
          </TabHeading>
        }>
       
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
