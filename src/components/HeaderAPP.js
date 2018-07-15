import React, { Fragment, Component } from 'react';
import { Header, Left, Body, Icon, Text, Button, Thumbnail, Title } from 'native-base';
import { Image, StyleSheet } from 'react-native';

const logo_url = 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4';

export default class HeaderAPP extends Component {
    render(){
        return (
        <Header androidStatusBarColor="#573ea8" style={styles.header} hasTabs>
            <Left>
            </Left>
            <Body>
                <Title> {this.props.HeaderTitle} </Title>
            </Body>
        </Header>
        )
    }
}

const styles = StyleSheet.create({
    header: { 
      backgroundColor: "#7159C1",
    },
   
  });