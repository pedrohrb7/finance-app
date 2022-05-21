import React from 'react';

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { MotiView, MotiText } from 'moti';

const Header = () => {
  return (
    <View style={styles.container}>
      <MotiView
        style={styles.content}
        from={{
          translateY: -150,
          opacity: 0
        }}

        animate={{
          translateY: 0,
          opacity: 1,
        }}

        transition={{
          type: 'spring',
          duration: 700,
          delay: 300
        }}
      />

      <View style={styles.content}>
        <MotiText 
          style={styles.title}
          from={{
            translateX: -300
          }}

          animate={{
            translateX: 0
          }}

          transition={{
            type: 'timing',
            duration: 700,
            delay: 700
          }}
        >
          My Account
        </MotiText>

        <TouchableOpacity>
          <Text>User</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8000ff',
    padding: 15,
    paddingBottom: 70
  },
  title: {
    fontSize: 18,
    color: '#fff'
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export default Header;
