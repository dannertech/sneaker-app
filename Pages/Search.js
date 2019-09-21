import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Results extends Component {

_performFetchRequest = () => {
    fetch("https://apidojo-adidas-v1.p.rapidapi.com/products/v2/list?sort_option_id=newest-to-oldest&v_size_en_us=30a%7Cm_3.5___w_4.5&lang=en-US&limit=30&url=men&page=1", {
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
    console.log(myJson._embedded);
})
.catch(err => {
	console.log(err);
});
}
    render(){
        return(
            <View>
                <Text>This is the Search page</Text>
                <Button title="Search" onPress={this._performFetchRequest}/>
            </View>
        )
    }
}