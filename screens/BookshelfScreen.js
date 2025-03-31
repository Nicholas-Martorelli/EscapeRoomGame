import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const BookshelfScreen = ({ navigation }) => {
  const [foundClue, setFoundClue] = useState(false);

  const checkBookshelf = () => {
    setFoundClue(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Lo Scaffale dei Libri Antichi</Text>
      <Text style={styles.description}>
        Ti trovi di fronte a un enorme scaffale pieno di libri polverosi. 
        Alcuni sembrano molto antichi, altri più moderni. Qualcuno di questi 
        potrebbe contenere un indizio per trovare il libro magico...
      </Text>

      {/* Simuliamo la ricerca tra i libri */}
      <TouchableOpacity style={styles.bookButton} onPress={checkBookshelf}>
        <Text style={styles.bookButtonText}>Cerca tra i libri</Text>
      </TouchableOpacity>

      {foundClue && (
        <Text style={styles.clueText}>
          ✨ Hai trovato un vecchio segnalibro con un enigma scritto sopra:  
          {"\n"} **"Sono leggero come una piuma, ma nemmeno il più forte può tenermi a lungo. Cosa sono?"**
        </Text>
      )}

      {/* Passaggio alla prossima scena */}
      {foundClue && (
        <Button title="Prosegui alla scrivania" onPress={() => navigation.navigate("Desk")} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
  },
  bookButton: {
    backgroundColor: "#8B4513",
    padding: 10,
    borderRadius: 8,
  },
  bookButtonText: {
    color: "white",
    fontSize: 18,
  },
  clueText: {
    marginTop: 20,
    fontSize: 18,
    color: "green",
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default BookshelfScreen;
