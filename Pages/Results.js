import React, { Component } from 'react';
import {  ListView } from 'react-native';
import {Card, CardItem, View, Text, Thumbnail, Container, Header, Content, Body} from 'native-base';


export default class Results extends Component {
    
    render(){
        console.log(this.props.navigation.state.params.resultsList)
        return(
            <View>
                <Text>This is the Results page</Text>
            </View>
        )
    }
}