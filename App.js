import React from 'react';
import { RefreshControl, ListView, StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import Currency from './Currency.js'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: false
    };
  }


  fetchData() {
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

  onRefresh() {
    this.setState({data: this.state.data, refreshing: true});
    this.fetchData();
    this.setState({data: this.state.data, refreshing: false});
  }

  render() {
    this.fetchData();
    tmp = this.state.data;
    return (
      <View style={{flex: 1}}>
        <View>
          <Text></Text>
          <Text/>
          <Text style={{fontFamily: 'Avenir', textAlign: 'center', height: 30, fontSize: 20, fontWeight: 'bold'}}>CryptoCurrency Application</Text>
        </View>
        <ScrollView refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh.bind(this)} />}>
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
