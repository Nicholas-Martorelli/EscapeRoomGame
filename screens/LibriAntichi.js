import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from "react-native";

export default function LibriAntichi({  navigation, route }) {

const { trovato } = route.params || { trovato: false };
  

  return (
    <View style={styles.container}>
      {/* Pulsante Back */}
      <View style={styles.buttonBack}>
      <Button title="Back" onPress={() => navigation.navigate("Game", {trovato})} />
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
          onPress={() => alert("Niente, solo un pò di polvere")}
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
    top:"1%",
    left:"33%",
    height: 120,
    width: 30,
    padding: 10,
    borderColor: "trasparent",
    borderWidth: 1,
  },
  transparentButton2:{
    position: "absolute",
    top:"30%",
    left:"33%",
    height: 170,
    width: 50,
    padding: 10,
    borderColor: "trasparent",
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
