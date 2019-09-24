import React, { Component } from 'react';
import {  FlatList } from 'react-native';
import {Card, CardItem, View, Text,Container, Header, Content, Body, Image, Left} from 'native-base';


class ProductItem extends React.PureComponent {
    render(){
        const item = this.props.item;
        const url = this.props.item._links.image_small.href
        return(
            <Card>
                <CardItem cardBody>
                    <Text style={{fontWeight: "bold"}}>{item.original_price}</Text>
                   </CardItem>
                   <CardItem>
                       <Left>
                           <Text>{item.product_name}</Text>
                       </Left>
                   </CardItem>
                   <CardItem>
                       <Left>
                           <Text>{item.description_headline}</Text>
                       </Left>
                   </CardItem>
               </Card>
        )
    }
}

export default class Results extends Component {
    _keyExtractor = (item, index) => index;
    
    _renderItem = ({item, index}) => (
        <ProductItem
            item={item}
            index={index}
        />
    )
    render(){
        console.log(this.props.navigation.state.params.resultsList)
        return(
            
               <FlatList style={{marginTop: 50}}
               data={this.props.navigation.state.params.resultsList}
               renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
               ></FlatList>        
        )
    }
}