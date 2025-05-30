import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from "react-native";

export default function LibriProibiti({ navigation }) {
  const [trovato, setTrovato] = useState(false);
  

  return (
    <View style={styles.container}>
      {/* Pulsante Back */}
      <View style={styles.buttonBack}>
        <Button title="Back" onPress={() => navigation.navigate("Game", { trovato })} />
      </View>
      <Text style={styles.title}>Corsia 2: Libri Proibiti</Text>
      <View style={styles.card}>
        <Image source={require("./img/libreriaDettaglio.jpg")} style={styles.image} />
        {/* Button trasparente sopra l'immagine */}
        <TouchableOpacity
          style={styles.transparentButton1}
          onPress={() => alert("Ci sei quasi")}
        />
        <TouchableOpacity
          style={styles.transparentButton2}
          onPress={() => {
            alert(
              "Hai trovato un vecchio segnalibro con un enigma scritto sopra:\n\n" +
                "Sono leggero come una piuma, ma nemmeno il più forte può tenermi a lungo. Cosa sono?"
            );
            setTrovato(true);
          }}
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
    backgroundColor: "#121212", // sfondo scuro
  },
  transparentButton1: {
    position: "absolute",
    top: "1%",
    left: "33%",
    height: 120,
    width: 30,
    padding: 10,
    borderColor: "transparent", // correggo typo
    borderWidth: 1,
  },
  transparentButton2: {
    position: "absolute",
    top: "30%",
    left: "33%",
    height: 170,
    width: 50,
    padding: 10,
    borderColor: "transparent", // correggo typo
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
    color: "#e0e0e0", // testo chiaro
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
