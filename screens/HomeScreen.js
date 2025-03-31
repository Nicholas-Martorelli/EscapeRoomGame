import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>La Biblioteca Segreta</Text>
      <Text style={styles.regulation}>
        Sei stato misteriosamente teletrasportato in una biblioteca segreta, ricca di antichi libri e misteri. Il tuo obiettivo è trovare il Libro Magico nascosto e fuggire prima che il tempo scada. Risolvi gli enigmi e svela i segreti per trovare l'uscita.
      </Text>
      <Button
        title="Inizia la Sfida"
        onPress={() => navigation.navigate('Game')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:"#1e1e1e"
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"white"
  },
  regulation: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color:"white"
  },
});

export default HomeScreen;
