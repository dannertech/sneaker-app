import React, { Component } from 'react';
import { Text, View, Button, ActivityIndicator, TextInput, Image } from 'react-native';

const adidasLogo = require('../Resources/adidas-logo.png')

export default class Search extends Component {
constructor(props){
    super(props);
    this.state = {
        isLoading: false,
        message: '',
        searchString: '',
        productArray: []
    }
}

_onChange = (event) => {
console.log(event.nativeEvent.text);
this.setState({
    searchString: event.nativeEvent.text
})
};



_performFetchRequest = () => {
    
    this.setState({
        isLoading: true
    })
    fetch("https://apidojo-adidas-v1.p.rapidapi.com/products/v2/list?sort_option_id=newest-to-oldest&v_size_en_us=30a%7Cm_3.5___w_4.5&lang=en-US&limit=30&url=" + this.state.searchString.toLowerCase() + "&page=1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-adidas-v1.p.rapidapi.com",
		"x-rapidapi-key": "dd8e8c5e63msha132d81aec354e6p120b7djsn908c742ea6e8"
	}
})
.then(response => {
	return response.json();
})
.then(myJson => {
    console.log(myJson._embedded.products[0]);
    this.setState({
        isLoading: false,
        productArray: myJson._embedded.products
    });
    this.props.navigation.navigate('Results', {
        resultsList: this.state.productArray
    });

})
.catch(err => {
    this.setState({
        isLoading: false
    })
    console.log(err);
    this.setState({
        message: err
    });
});
}
    render(){
        const spinner = this.state.isLoading ? <ActivityIndicator size='large'></ActivityIndicator> : null;
        return(
            <View>
                <View style={{ justifyContent: 'center', alignContent: 'center', flexDirection: 'row'}}>
                <Image source={adidasLogo} style={{width: 150, height: 150, marginTop: 200}}></Image>
                </View>
                <View style={{marginTop: 60, alignContent: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <TextInput style={{borderColor: '#000', borderWidth: 2, borderRadius: 20, color: '#000'}} placeholder="Enter Men or Women" onChange={(event) => this._onChange(event)} ></TextInput>
                <Button title="Search" color='#000' onPress={this._performFetchRequest}/>
                </View>
                
                {spinner}
            </View>
        )
    }
}