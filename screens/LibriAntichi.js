import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from "react-native";

export default function LibriAntichi({ navigation }) {


  return (
    <View style={styles.container}>
      {/* Pulsante Back */}
      <View style={styles.buttonBack}>
      <Button title="Back" onPress={() => navigation.navigate("Game")} />
      </View>
      <Text style={styles.title}>Corsia 1: Libri Antichi</Text>
      <View style={styles.card}>
        <Image source={require("./img/libreriaDettaglio.jpg")} style={styles.image}/>
        {/* Button trasparente sopra l'immagine */}
        <TouchableOpacity
          style={styles.transparentButton1}
          onPress={() => alert ("Ci sei quasi")}
        >
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transparentButton2}
          onPress={() => alert("Hai trovato un vecchio segnalibro con un enigma scritto sopra:\n\n" +
            "Sono leggero come una piuma, ma nemmeno il più forte può tenermi a lungo. Cosa sono?")}
        >
        </TouchableOpacity>
      </View>

      {/* Titolo sotto l'immagine */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  transparentButton1:{
    position: "absolute",
    top:"10%",
    left:"35%",
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
    zIndex: 1, 
  },
  transparentButton2:{
    position: "absolute",
    top:"50%",
    left:"35%",
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
    zIndex: 1, 
  },
  image: {
    height: "100%",  
    width: "100%",  
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 20,
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
