import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BemVindoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem Vindo</Text>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.nextButtonText}>Ir para Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 32,
    marginBottom: 20,
  },
  nextButton: {
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  nextButtonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default BemVindoScreen;
