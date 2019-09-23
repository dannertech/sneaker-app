import React, { Component } from 'react';
import {View, Text, ImageBackground, Button, StyleSheet, Image} from 'react-native';

const adidasLogo = require('../Resources/adidas-logo.png');

export default class Splash extends Component {
    render(){
        return(
            <ImageBackground source={require("../Resources/background.png")} style={{width: '100%', height: '100%'}}>
                <Image style={{width: 60, height: 50}} source={adidasLogo}></Image>
                <Button style={styles.button} title="Enter" onPress={() => this.props.navigation.navigate('Search')}></Button>
            </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
    button : {
        
        color: 'black'
    },
    image: {
        width: 50,
        height: 50,
        marginTop: '50'
    },
})