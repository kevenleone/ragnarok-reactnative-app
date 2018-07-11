import React, {Component} from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { Badge, Text } from 'native-base';
import { Fonts } from '../utils/Fonts'

export default class BadgeItem extends Component {

    render(){
        return (
                <Badge style={{marginBottom: 10, backgroundColor: this.props.color }}  >
                    <Text style={styles.SkillFont}>{this.props.title}</Text>
                </Badge>
        )
    }
}

const styles = StyleSheet.create({
    SkillFont: {
        fontFamily: Fonts.Markazi
    }
})
