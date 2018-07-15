import React, { Component } from 'react'
import {Image, View, StyleSheet } from 'react-native'
import { Text } from 'native-base'
import { Fonts } from '../utils/Fonts'

export default class Loading extends Component {
    
    static navigationOptions = {
        header: null
    }

    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/icon/1751.gif')} /> 
                <Text style={styles.text}>{this.props.text}.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -90
    },
    image: {
        height: '100%',
    },
    text: {
        fontFamily: Fonts.Markazi,
        fontSize: 25 
    }
})