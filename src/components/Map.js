import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { List, Header, Card, Content, CardItem, Container } from 'native-base'

import { Fonts } from '../utils/Fonts'
import { API } from '../utils/API'
import ItemList from './ItemList'

export default class Map extends Container {
   
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('map').map,
            headerStyle: {
                backgroundColor: '#7159C1',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
            }
        }   
    }

    state = {
        monsterList: [],
        mapInfo : ''
    }

    getMapInfo = async() => {
        const { navigation } = this.props;
        const mapProps = navigation.getParam('map')
        mapReq = await fetch(`${API.IP}/map/${mapProps.map}`)
        mapRes = await mapReq.json()

        this.setState(
            {
                monsterList: mapRes,
                mapInfo: mapProps
            })
    }

    componentDidMount(){
        this.getMapInfo();
    }

    render() {
        return (
            <Container style={styles.containerLocation}>
                <Content >
                    <Card >
                        <CardItem>
                            <Image
                                source={{ uri: `http://www.ragnadb.com.br/img/maps/${this.state.mapInfo.map}.gif` }}
                                style={styles.map} />
                        </CardItem>
                      
                    </Card>
                    <List>
                        {this.state.monsterList.map(monster => (
                            <ItemList
                            style={styles.list} 
                            key={monster.id} 
                            url={`http://file5.ratemyserver.net/mobs/${monster.id}.gif`} 
                            title={monster.iName} 
                            subTitle={`Spawn: ${monster.total}/${monster.spawntime}`} 
                            navigation={this.props.navigation}
                            />
                        ))}
                    </List>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        height: 300,
    },

    spawnLegend: {
        marginRight: 'auto',
        marginLeft: 'auto',
        fontFamily: Fonts.Markazi,
        fontSize: 16,
        marginTop: -15

    },

    legends: {
        fontFamily: Fonts.Markazi,
        fontSize: 20
    },

    containerLocation: {
        backgroundColor: '#fff',
        flex: 1,
        height: '100%'
    },
    list: {
        fontFamily: Fonts.Markazi,
    }

})
