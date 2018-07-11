import React, { Component, Fragment } from 'react'
import { Image, ScrollView, StyleSheet } from 'react-native';
import {Tabs, Tab, Text, View, TabHeading, Icon} from 'native-base'
import { Fonts } from '../utils/Fonts'
export default class TabsAPP extends Component {
    render(){
        return (
          <ScrollView>
            <Tabs tabBarUnderlineStyle={{borderBottomWidth:2}}>
               
                <Tab 
                    tabStyle={styles.TabStyle}
                    textStyle={styles.TextStyle}
                    activeTabStyle={styles.TabStyle}
                    activeTextStyle={styles.TextStyle}
                    heading={this.props.t2Header}>
                {this.props.t2Content}
                </Tab>
                <Tab 
                    tabStyle={styles.TabStyle}
                    textStyle={styles.TextStyle}
                    activeTabStyle={styles.TabStyle}
                    activeTextStyle={styles.TextStyle}
                    heading={this.props.t1Header}>
                        {this.props.t1Content}
                </Tab>
                <Tab 
                    tabStyle={styles.TabStyle}
                    textStyle={styles.TextStyle}
                    activeTabStyle={styles.TabStyle}
                    activeTextStyle={styles.TextStyle}
                    heading={this.props.t3Header} >
                <View>
                    <Text>Monster Location</Text>
                </View>
                </Tab>
        </Tabs>
      </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  Content: {
      height: 100,
      backgroundColor: '#fff'
  },

  TabStyle: {
      backgroundColor: '#fff',
  },

  TextStyle: {
      fontFamily: Fonts.Markazi,
      color: '#000'
  }
})