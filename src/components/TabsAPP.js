import React, { Component, Fragment } from 'react'
import { Image, StyleSheet } from 'react-native';
import {Tabs, Tab, TabHeading, Icon} from 'native-base'
import Home from './Home'

export default class TabsAPP extends Component {
    render(){
        return (
            <Tabs>
            <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="home" /></TabHeading>}>
              <Home blogList={this.state.blogList}/>
            </Tab>
            <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="bell-o" /></TabHeading>}>
              {/* <Notification /> */}
            </Tab>
            <Tab heading={<TabHeading style={styles.tabHeading} ><Icon type="FontAwesome" name="envelope-o" /></TabHeading>}>
              {/* <Messages messages={messages}/> */}
            </Tab>
          </Tabs>
        )
    }
}

const styles = StyleSheet.create({
    tabHeading: {
      backgroundColor: "#7159C1",
    },
    header: { 
      backgroundColor: "#7159C1",
    },
    container: {
      flex: 1,
    }
})