import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class ExibeItens extends Component {

  render() {
    
    return (
      <View>
        <FlatList
          width='100%'
          data={this.props.lista}
          extraData={this.props.lista}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={item}> Descrição: {item.descricao}; Fabricante: {item.fabricante} </Text>}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 20,
  }
});
