import React from 'react';
import { ListView, StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import Currency from './Currency.js'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    tmp = this.state.data;
    return (
      <View style={{flex: 1}}>
        <View>
          <Text></Text>
          <Text/>
          <Text style={{fontFamily: 'Avenir', textAlign: 'center', height: 30, fontSize: 20, fontWeight: 'bold'}}>CryptoCurrency Application</Text>
        </View>
        <ScrollView>
          {tmp.map(function(current, index) {
            return <Currency key={index} data={current}/>
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
