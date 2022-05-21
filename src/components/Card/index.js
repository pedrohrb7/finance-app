import { MotiView } from 'moti';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Card = () => {
  return (
    <MotiView
      style={styles.container}
      from={{
        rotateX: '-100deg',
        opacity: 0
      }}

      animate={{
        rotateX: '0deg',
        opacity: 1
      }}

      transition={{
        type: 'timing',
        delay: 300,
        duration: 900
      }}>
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currency}>R$</Text>
          <Text style={styles.money}>15.000,00</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currency}>R$</Text>
          <Text style={styles.expenses}>100,00</Text>
        </View>
      </View>
    </MotiView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -24,
    marginHorizontal: 14,
    borderRadius: 8,
    zIndex: 99,
    paddingVertical: 22,
    paddingHorizontal: 18
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  itemTitle: {
    fontSize: 20,
    color: '#DADADA'
  },

  currency: {
    color: '#DADADA',
    marginRight: 6
  },

  money: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  expenses: {
    fontSize: 22,
    color: '#e74c3c'
  }
})

export default Card;
