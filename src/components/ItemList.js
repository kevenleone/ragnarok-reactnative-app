import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { List, ListItem, Body, Text, Left, Thumbnail} from 'native-base'

import { Fonts } from '../utils/Fonts'

export default class ItemList extends Component {
    render(){
        return (
            <List>
                {this.props.itens.map(item => (
                    <ListItem key={item.id} avatar>
                        <Left>
                            <Thumbnail small source={{ uri: item.itemUrl }} />
                        </Left>
                        <Body>
                            <Text style={styles.itemName}>{item.item}</Text>
                            <Text style={styles.itemInfo} note> bonus2 bAddRaceTolerance,RC_Plant,10; </Text>
                        </Body>
                    </ListItem>
                ))}
            </List>
        )
    }
}

const styles = StyleSheet.create({
    itemName: {
        fontFamily: Fonts.Markazi,
        fontSize: 18
    },
    itemInfo: {
        fontFamily: Fonts.Markazi,
        fontSize: 16
    }
})