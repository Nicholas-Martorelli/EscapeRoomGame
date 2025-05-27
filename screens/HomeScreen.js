import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('./img/Home.jpg')} style={styles.background} resizeMode="stretch">
      <View style={styles.overlay}>
        <Text style={styles.title}>La Biblioteca Segreta</Text>
        <Text style={styles.regulation}>
          Sei stato misteriosamente teletrasportato in una biblioteca segreta, ricca di antichi libri e misteri.
          Il tuo obiettivo è trovare il Libro Magico nascosto e fuggire prima che il tempo scada. 
          Risolvi gli enigmi e svela i segreti per trovare l'uscita.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game')}>
          <Text style={styles.buttonText}>Inizia la Sfida</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegole} onPress={() => alert("1) Se puoi non usare Internet per le risposte \n 2) All'interno del gioco puoi premere su ogni cosa per cercare indizi")}>
          <Text style={styles.buttonText}>Regolamento</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Sfondo semi-trasparente
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    textAlign: 'center',
  },
  regulation: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: 'white',
  },
  button: {
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  btnRegole:{
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
  }
});

export default HomeScreen;
