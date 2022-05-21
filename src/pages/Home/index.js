import React from 'react';

import { FlatList, View, StyleSheet, Text } from 'react-native';

import Header from '../../components/Header';
import Card from '../../components/Card';
import List from '../../components/List';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Conta de Lux',
    value: '101,08',
    date: '18/02/2022',
    type: 0
  },
  {
    id: 2,
    label: 'Pix recebido',
    value: '2.001,08',
    date: '20/03/2022',
    type: 1
  }
]

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Card />
      <Actions />
      <Text style={styles.title}>Ultimas movimentacoes</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <List data={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa'
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },

  list: {

  }
})

export default Home;
