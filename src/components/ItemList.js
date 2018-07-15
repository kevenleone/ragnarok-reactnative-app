import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { List, Button, Right, ListItem, Thumbnail, Left, Body, Text } from 'native-base'
import { Fonts } from '../utils/Fonts'

export default class ItemList extends Component {

    componentDidMount(){
        const { navigation } = this.props;
    }

    render() {
        return (
            <TouchableOpacity >
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail small source={{ uri: this.props.url }} />
                    </Left>
                    <Body>
                        <Text style={styles.monsterName}>{this.props.title}</Text>
                        <Text style={styles.monsterTitle} note numberOfLines={1}>{this.props.subTitle}
                        </Text>
                       </Body>
                       <Right>
                            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                                <Text>Info</Text>
                            </Button>
                        </Right>
                </ListItem>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    monsterName: {
        fontFamily: Fonts.Markazi,
        fontSize: 20
    },
    monsterTitle: {
        fontFamily: Fonts.Markazi,
        fontSize: 15
    }
})