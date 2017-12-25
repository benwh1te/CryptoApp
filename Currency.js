import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Currency extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', height: 90}}>
        <Text style={{fontFamily: 'Avenir'}}>{this.props.data.name}</Text>
      </View>
    );
  }
}
