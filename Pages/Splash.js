import React, { Component } from 'react';
import {View, Text, ImageBackground, Button, StyleSheet, Image} from 'react-native';

const adidasLogo = require('../Resources/adidas-logo.png');

export default class Splash extends Component {
    render(){
        return(
            <ImageBackground source={require("../Resources/background.png")} style={{width: '100%', height: '100%'}}>
                <Image style={{width: 60, height: 50, marginTop: 50}} source={adidasLogo}></Image>
                <View style={styles.bottom}>
                <Button color="000" style={{fontSize: 30, marginTop: 200}} title="Enter" onPress={() => this.props.navigation.navigate('Search')}></Button>
                </View>
            </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({
    bottom: {
        flex: 1,
        justifyContent: 'flex-end'
    }
    
})