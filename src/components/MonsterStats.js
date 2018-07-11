import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Container, Header, Badge, Left, Right, Icon, Text, Content, Thumbnail } from 'native-base';
import { Fonts } from '../utils/Fonts'

export default class MonsterStats extends  Component {
    render(){
        return (
            <View style={styles.QeA}>
                <Text style={styles.informationQuestion}>{this.props.question}</Text>
                <Right>
                    <Text style={styles.informationAnswer}>{this.props.answer}</Text>
                </Right>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    informationQuestion: {
        fontFamily: Fonts.Markazi,
        fontSize: 18
      },
    
      informationAnswer: {
        marginLeft: 60,
        fontFamily: Fonts.Markazi
      },
    
      QeA: {
          flexDirection: 'row',
          margin: 5,
      }
})