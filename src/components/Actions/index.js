import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';

const Actions = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>

      <TouchableOpacity style={styles.areaButton}>
        <View style={styles.actionButton}>
          <Text style={{ fontSize: 30 }}> + </Text>
        </View>
        <Text style={styles.labelButton}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.areaButton}>
        <View style={styles.actionButton}>
          <Text style={{ fontSize: 30 }}> - </Text>
        </View>
        <Text style={styles.labelButton}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.areaButton}>
        <View style={styles.actionButton}>
          <Text style={{ fontSize: 30 }}> - </Text>
        </View>
        <Text style={styles.labelButton}>Boleto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.areaButton}>
        <View style={styles.actionButton}>
          <Text style={{ fontSize: 30 }}> - </Text>
        </View>
        <Text style={styles.labelButton}>Credito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.areaButton}>
        <View style={styles.actionButton}>
          <Text style={{ fontSize: 30 }}> - </Text>
        </View>
        <Text style={styles.labelButton}>Emprestimos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.areaButton}>
        <View style={styles.actionButton}>
          <Text style={{ fontSize: 30 }}> - </Text>
        </View>
        <Text style={styles.labelButton}>Investimentos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.areaButton}>
        <View style={styles.actionButton}>
          <Text style={{ fontSize: 30 }}> - </Text>
        </View>
        <Text style={styles.labelButton}>Extrato</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.areaButton}>
        <View style={styles.actionButton}>
          <Text style={{ fontSize: 30 }}> - </Text>
        </View>
        <Text style={styles.labelButton}>Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 84,
    marginVertical: 18,
    paddingHorizontal: 14
  },

  areaButton: {
    alignItems: 'center',
    marginRight: 32
  },

  actionButton: {
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },

  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
export default Actions;
