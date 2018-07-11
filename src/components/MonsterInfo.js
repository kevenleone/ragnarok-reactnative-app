import React, {Component} from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Container, List, ListItem, Body, Button, Header, Left, Right, Icon, Text, Content, Thumbnail } from 'native-base';

import Badge from './BadgeItem'
import ItemList from './ItemList'
import HeaderAPP from './HeaderAPP'
import TabsAPP from './TabsAPP'
import MonsterStats from './MonsterStats'
import { Fonts } from '../utils/Fonts'

export default class MonsterInfo extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            header: null,
            title: 'Dark Lord',
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

        const itens = [
            {
                id: 1,
                item: "Flor de Valhalla",
                itemUrl: 'http://file5.ratemyserver.net/items/small/7510.gif'
            },{
                id: 1000,
                item: "Poeira Estelar",
                itemUrl: 'http://file5.ratemyserver.net/items/small/1000.gif'
            },{
                id: 501,
                item: "Poção Vermelha",
                itemUrl: 'http://file5.ratemyserver.net/items/small/501.gif'
            },{
                id: 502,
                item: "Poção Amarela",
                itemUrl: 'http://file5.ratemyserver.net/items/small/502.gif'
            },{
                id: 552,
                item: "Poção Amarela",
                itemUrl: 'http://file5.ratemyserver.net/items/small/552.gif'
            },{
                id: 577,
                item: "Poção Amarela",
                itemUrl: 'http://file5.ratemyserver.net/items/small/577.gif'
            },{
                id: 553,
                item: "Poção Amarela",
                itemUrl: 'http://file5.ratemyserver.net/items/small/553.gif'
            },
            
        ]

        const MonsterDrop = () => (
            <Content>
                <ItemList itens={itens}/>
            </Content>
        )
        
        const MonsterDetail = () => (
            <View>
                <View style={styles.informationView}>
                    <MonsterStats question="Level" answer="99" />
                    <MonsterStats question="HP" answer="28549300" />
                    <MonsterStats question="EXP" answer="2854900" />
                    <MonsterStats question="ATK" answer="5560~9980" />
                    <MonsterStats question="DEF" answer="25" />
                    <MonsterStats question="MDEF" answer="42" />
                    <MonsterStats question="DEX" answer="220" />
                    <MonsterStats question="AGI" answer="25" />
                    <MonsterStats question="VIT" answer="30" />
                    <MonsterStats question="LUK" answer="210" />
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
                            <Badge color="#333" title="Teleporte" />
                            <Badge color="#333" title="Sucking Blood" />
                            <Badge color="#333" title="Sucking Blood" />
                            <Badge color="#333" title="Sucking Blood" />
                            <Badge color="#333" title="Sucking Blood" />
                            <Badge color="#333" title="Shadow Attack" />
                        </View>
                    </View>
                </View>

            </View>
        )
      
        return (
            <Container>
                <View style={styles.Container}>
                    <View style={styles.monsterView}>
                        <Text style={styles.monsterName}>Valquíria Randgris</Text>
                        <Badge color="#aac" title="Anjo" />
                    </View>
                    <Right>
                        <Image
                            style={styles.monsterAvatar} 
                            source={{uri: 'http://www.ragnadb.com.br/img/monstro/1751/valquiria-randgris.gif'}}
                        />
                    </Right>
                </View>
                    <TabsAPP 
                        t1Header="Information"
                        t1Content={<MonsterDetail/>}
                        t2Header="Drops"
                        t2Content={<MonsterDrop/>}
                        t3Header="Location" />
               
      </Container>
        )
    }
}

const styles = StyleSheet.create({
   TabStyle: {
       backgroundColor: '#fff'
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
    fontSize: 25,
    fontFamily: Fonts.Markazi
   },

   monsterRace: {
    fontSize: 18,
    fontFamily: Fonts.Markazi
    
   },

   Container: {
    backgroundColor: "#FFF",
    height: 130,
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