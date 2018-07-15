import React, {Component} from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Container, List, ListItem, Body, Button, Header, Left, Right, Icon, Text, Content, Thumbnail } from 'native-base';

import LocationList from './LocationList'
import Badge from './BadgeItem'
import HeaderAPP from './HeaderAPP'
import TabsAPP from './TabsAPP'
import MonsterStats from './MonsterStats'
import { Fonts } from '../utils/Fonts'
import { API } from '../utils/API'
import Loading from './Loading'
import ItemList from './ItemList'

export default class MonsterInfo extends Component {
    state = {
        itens : [],
        monsterDetail: [],
        monsterSkill: [],
        monsterHomeLocation: [],
        monsterInformation:[],
        loaded: false
    }

    getItemDetail = async() => {
        const { navigation } = this.props;
        const monsterProps = navigation.getParam('monster')
        const monsterRequest = await fetch(`${API.IP}/monster/details/${navigation.getParam('monsterId')}`)
        const monsterResponse = await monsterRequest.json()
        this.setState(
            {
                itens: monsterResponse.drops, 
                monsterInformation: monsterProps,
                monsterDetail: monsterResponse.monsterDetail[0],
                monsterSkill: monsterResponse.monsterSkill,
                monsterHomeLocation: monsterResponse.monsterHome,
                loaded: true
            }
        )
    }

    async componentDidMount(){
        this.getItemDetail()
    }

    componentWillMount(){
    }
    
    static navigationOptions = ({navigation}) => {
        return {
            header: null,
            title: navigation.getParam('monsterName'),
            headerStyle: {
                backgroundColor: '#7159C1',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
            }
        }   
    }

    render(){
        const { navigation } = this.props

        const MonsterHome = () => (
           <LocationList navigation={this.props.navigation} monsterLocation={this.state.monsterHomeLocation} />
        )

        const MonsterDrop = () => (
            <Content>
                {this.state.itens.map(item => (
                    <ItemList 
                    key={item.id} 
                    title={item.item} 
                    url={`http://file5.ratemyserver.net/items/small/${item.id}.gif`}
                      />
                ))}
            </Content>
        )
        
        const MonsterDetail = () => (
            <View>
                <View style={styles.informationView}>
                    <MonsterStats question="Level" answer={this.state.monsterDetail.LV} />
                    <MonsterStats question="HP" answer={this.state.monsterDetail.HP} />
                    <MonsterStats question="EXP" answer={this.state.monsterDetail.EXP} />
                    <MonsterStats question="ATK" answer={this.state.monsterDetail.ATK2 +'~'+this.state.monsterDetail.ATK1} />
                    <MonsterStats question="DEF" answer={this.state.monsterDetail.DEF} />
                    <MonsterStats question="MDEF" answer={this.state.monsterDetail.MDEF} />
                    <MonsterStats question="DEX" answer={this.state.monsterDetail.DEX} />
                    <MonsterStats question="AGI" answer={this.state.monsterDetail.AGI} />
                    <MonsterStats question="VIT" answer={this.state.monsterDetail.VIT} />
                    <MonsterStats question="LUK" answer={this.state.monsterDetail.LUK} />
                </View>

                {/* <View style={styles.mvpView}>
                    <View style={{marginTop: 20}}>
                        <Badge title="MVP Monster" color="#132"/>
                    </View>
                <Right>
                    <Thumbnail 
                        large
                        style={styles.mvpImage}
                        source={require('../../assets/images/mvp.png')} />
                </Right>
                </View> */}

                <View style={styles.informationView}>
                   <View style={styles.QeA}>
                        <Text style={styles.informationQuestion}>Skills</Text>
                        <View style={{marginLeft: 10, flexWrap: 'wrap', marginLeft: 20, flexDirection: 'row'}}>
                        {this.state.monsterSkill.map(skill => (
                            <Text style={styles.skill} key={skill.SkillID}>{skill.skill}  </Text>
                        ))}
                        </View>
                    </View>
                </View>

            </View>
        )
      
        return (
            <Container style={{backgroundColor: '#fff'}}>
            {
                this.state.loaded ?
                <Container style={{backgroundColor: '#fff'}}>
                   <View style={{width: 100}}>
                 <Button onPress={() => this.props.navigation.navigate('Home')} iconLeft transparent dark >
                        <Icon name="arrow-back"></Icon>
                        <Text style={styles.monsterId}>#{this.state.monsterInformation.id} </Text>
                    </Button>
                </View>
                <View style={styles.Container}>
                   
                    <View style={styles.monsterView}>
                  
                        <Text style={styles.monsterName}>{this.state.monsterInformation.iName}</Text>
                        <Badge color={this.state.monsterInformation.background} title={this.state.monsterInformation.race} />
                    </View>
                    <Right>
                        <Thumbnail large
                            source={{uri: this.state.monsterInformation.avatar}}
                        />
                    </Right>
                </View>
                    <TabsAPP 
                        t1Header="Information"
                        t1Content={<MonsterDetail/>}
                        t2Header="Drops"
                        t2Content={<MonsterDrop/>}
                        t3Header="Location" 
                        t3Content={<MonsterHome/>}
                        />
            </Container>

            :

            <Loading text="Loading Monster Info..." />

            }
              
            </Container>
        )
    }
}

const styles = StyleSheet.create({
   TabStyle: {
       backgroundColor: '#fff'
   },

   monsterId: {
        fontFamily: Fonts.Markazi,
        fontSize: 18
   },

   TextStyle: {
        color: '#000'
   },

   monsterView: {
        marginLeft: 10,
        marginTop: 40
   },

   mvpTitle: {
       justifyContent: 'center',
       flex: 1,
       fontSize: 20,
       fontFamily: Fonts.Markazi
   },

   monsterName: {
    fontSize: 20,
    fontFamily: Fonts.Markazi,
    marginLeft: 5
   },

   monsterRace: {
    fontSize: 18,
    fontFamily: Fonts.Markazi,
    color: '#000'
   },

   Container: {
    backgroundColor: "#FFF",
    height: 110,
    padding: 5,
    flexDirection: 'row',
  },

  monsterAvatar: {
    marginRight: 1,
    width: '50%',
    height: '100%'
  },

  mvpImage: {
      marginLeft: 5
  },

  skill: {
    fontFamily: Fonts.Markazi,
    padding: 5,
  },
  
  mvpView: {
     flexDirection: 'row',
     padding: 5 
  },

  informationView: {
    padding: 20
  },

  informationQuestion: {
    fontFamily: Fonts.Markazi,
    fontSize: 18
  },

  informationAnswer: {
    fontFamily: Fonts.Markazi
  },


  QeA: {
      flexDirection: 'row'
  }

})