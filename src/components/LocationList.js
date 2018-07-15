import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Container, Right, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

import { Fonts } from '../utils/Fonts'

export default class LocationList extends Component {
    render(){
        const { navigation } = this.props
        return (
        <Container style={styles.containerLocation}>
            <Content >
                {this.props.monsterLocation.map(monsterHome => (
                    <Card key={monsterHome.map}>
                        <CardItem>
                            <Left>
                                <Body style={{marginLeft: 5}}>
                                    <Text style={styles.legends}>{monsterHome.map}</Text>
                                    <Text note>{monsterHome.mapTitle}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Map', {
                            map: monsterHome
                        })}>
                        <CardItem>
                            <Image 
                            source={{uri: `http://www.ragnadb.com.br/img/maps/${monsterHome.map}.gif`}} 
                            style={styles.map }/>
                        </CardItem>
                        </TouchableOpacity>
                        <CardItem>
                            <Body>
                                <Text style={styles.spawnLegend} note>
                                    {monsterHome.total + '/'+monsterHome.spawn}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                ))}
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
        backgroundColor:'#fafafa',
        flex: 1,
        height: '100%'
    }
    
})
