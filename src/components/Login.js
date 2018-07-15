import React, { Component } from 'react'
import { Image, View, ImageBackground, StyleSheet } from 'react-native'
import { Text, Container, Content, Input, Label, Form, Item, Thumbnail } from 'native-base'

export default class Login extends Component {

    static navigationOptions = {
        header: null
    }

    render(){
        return (
            <Container style={styles.container}>
                <View style={{marginTop: -90}}>
                    <Image source={require('../../assets/icon/1098.gif')} />
                </View>
                <ImageBackground source={require('../../assets/images/box.bmp')} style={styles.backImage}>
                <Text style={{marginLeft: 2}}>Login</Text>
                <Content>
          <Form>
            <Item >
              <Label>Usuário</Label>
              <Input />
            </Item>
            <Item last>
              <Label>Senha</Label>
              <Input />
            </Item>
          </Form>
        </Content>
                 </ImageBackground>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    viewLogin: {
        backgroundColor: '#fff',
        width: 200,
        height: 200,
    },
    
    backImage: {
        width: 300,
        height: 200,

    }

})