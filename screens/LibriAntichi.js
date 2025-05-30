import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from "react-native";

export default function LibriAntichi({ navigation, route }) {
  const { trovato } = route.params || { trovato: false };

  return (
    <View style={styles.container}>
      {/* Pulsante Back */}
      <View style={styles.buttonBack}>
        <Button title="Back" onPress={() => navigation.navigate("Game", { trovato })} />
      </View>
      <Text style={styles.title}>Corsia 1: Libri Antichi</Text>
      <View style={styles.card}>
        <Image source={require("./img/libreriaDettaglio.jpg")} style={styles.image} />
        {/* Pulsanti trasparenti sopra l'immagine */}
        <TouchableOpacity
          style={styles.transparentButton1}
          onPress={() => alert("Ci sei quasi")}
        />
        <TouchableOpacity
          style={styles.transparentButton2}
          onPress={() => alert("Niente, solo un pò di polvere")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#121212", // sfondo scuro coerente
  },
  transparentButton1: {
    position: "absolute",
    top: "1%",
    left: "33%",
    height: 120,
    width: 30,
    borderColor: "transparent",
    borderWidth: 1, // necessario per il tocco anche con colore trasparente
  },
  transparentButton2: {
    position: "absolute",
    top: "30%",
    left: "33%",
    height: 170,
    width: 50,
    borderColor: "transparent",
    borderWidth: 1,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
    color: "#e0e0e0", // testo chiaro, leggibile su sfondo scuro
  },
  buttonBack: {
    position: "absolute",
    top: 50,
    left: 40,
    zIndex: 1,
  },
  card: {
    width: "100%",
    height: 550,
    borderRadius: 15,
    overflow: "hidden",
    position: "relative",
  },
});
