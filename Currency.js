import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Currency extends React.Component {
  render() {
    let img;
    switch(this.props.data.id) {
        case 'bitcoin': img = require('./images/bitcoin.png'); break;
        case 'ethereum': img = require('./images/ethereum.png'); break;
        case 'bitcoin-cash': img = require('./images/bitcoin-cash.png'); break;
        case 'ripple': img = require('./images/ripple.png'); break;
        case 'litecoin': img = require('./images/litecoin.png'); break;
    }
    return (
      <View style={{flex: 1, flexDirection: 'column', height: 150, justifyContent: 'flex-start'}}>
        <View style={{flex: 1, flexDirection: 'row', width: 50, height: 50}}>
            <Image source={img} />
        </View>
        <View style={{flex: 1, flexDirection: 'row', width: 200, height: 100}}>
            <Text style={{fontFamily: 'Avenir'}}>   {this.props.data.name}</Text>
        </View>
      </View>
    );
  }
}
