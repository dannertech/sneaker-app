import React, { Component } from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';

export default class Splash extends Component {
    render(){
        return(
            <ImageBackground source={require("../Resources/background.png")} style={{width: '100%', height: '100%'}}>
                <Text>This is the Splash page</Text>
                <Button title="Enter" onPress={() => this.props.navigation.navigate('Search')}></Button>
            </ImageBackground>
        )
    }
}