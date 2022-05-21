import React, { useState } from 'react';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { MotiView, MotiText, AnimatePresence } from 'moti';

const List = ({ data }) => {
  const [showValue, setShowValue] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
      <Text styles={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        {showValue ?
          (
            <AnimatePresence exitBeforeEnter>
              <MotiText
                style={
                  (data.type === 1) ? styles.value : styles.expense}
                from={{
                  translateX: 100,
                }}

                animate={{
                  translateX: 0
                }}

                transition={{
                  type: 'spring',
                  duration: 500
                }}
              >
                {data.type === 1 ? `R$ ${data.value}` : `- R$ ${data.value}`}
              </MotiText>
            </AnimatePresence>
          ) : (
            <AnimatePresence exitBeforeEnter>
              <MotiView
                style={styles.hideValue}
                from={{
                  opacity: 0
                }}

                animate={{
                  opacity: 1
                }}

                transition={{
                  type: 'timing'
                }}
              ></MotiView>
            </AnimatePresence>
          )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA',
    marginHorizontal: 14
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },

  date: {
    color: '#DADADA',
    fontWeight: 'bold'
  },

  label: {
    fontWeight: 'bold',
    fontSize: 16
  },

  value: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold'
  },

  expense: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold'
  },

  hideValue: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: '#DADADA',
    borderRadius: 8
  }
})
export default List;
