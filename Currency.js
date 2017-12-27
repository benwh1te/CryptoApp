import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Currency extends React.Component {
  render() {
    let img, first, second, third;
    switch(this.props.data.id) {
        case 'bitcoin': img = require('./images/bitcoin.png'); break;
        case 'ethereum': img = require('./images/ethereum.png'); break;
        case 'bitcoin-cash': img = require('./images/bitcoin-cash.png'); break;
        case 'ripple': img = require('./images/ripple.png'); break;
        case 'litecoin': img = require('./images/litecoin.png'); break;
        case 'iota': img = require('./images/iota.png'); break;
        case 'dash': img = require('./images/dash.png'); break;
        case 'monero': img = require('./images/monero.png'); break;
        case 'nem': img = require('./images/nem.png'); break;
        case 'cardano': img = require('./images/cardano.png'); break;
    }
    if(this.props.data.percent_change_1h > 0) {
      first = <Text style={{fontFamily: 'Avenir', fontSize: 11, color: 'green'}}>   Last Hour: {this.props.data.percent_change_1h}%</Text>;
    } else {
      first = <Text style={{fontFamily: 'Avenir', fontSize: 11, color: 'red'}}>   Last Hour: {this.props.data.percent_change_1h}%</Text>;
    }

    if(this.props.data.percent_change_24h > 0) {
      second = <Text style={{fontFamily: 'Avenir', fontSize: 11, color: 'green'}}>24 hours: {this.props.data.percent_change_24h}%</Text>
    } else {
      second = <Text style={{fontFamily: 'Avenir', fontSize: 11, color: 'red'}}>24 hours: {this.props.data.percent_change_24h}%</Text>
    }

    if(this.props.data.percent_change_7d > 0) {
      third = <Text style={{fontFamily: 'Avenir', fontSize: 11, color: 'green'}}>7 days: {this.props.data.percent_change_7d}%   </Text>
    } else {
      third = <Text style={{fontFamily: 'Avenir', fontSize: 11, color: 'red'}}>7 days: {this.props.data.percent_change_7d}%   </Text>
    }

    return (
      <View style={{flex: 1, flexDirection: 'row', height: 100, justifyContent: 'space-around'}}>
        <View style={{width: 2, height: 100}}/>
        <Image source={img} />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontFamily: 'Avenir', fontSize: 18}}>   {this.props.data.name} | {this.props.data.symbol}</Text>
              <Text style={{fontFamily: 'Avenir', fontSize: 18, fontWeight: 'bold'}}>${this.props.data.price_usd}   </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              {first}
              {second}
              {third}
            </View>
          </View>
        </View>
      </View>
    );
  }
}
