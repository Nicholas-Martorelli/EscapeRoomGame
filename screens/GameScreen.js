import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

const GameScreen = ({ navigation, route }) => {
  const { trovato } = route.params || { trovato: false };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Benvenuto nella Biblioteca Segreta</Text>
      <View style={styles.card}>
        <Image source={require("./img/libreria.jpg")} style={styles.image} />
        {/* Button trasparente sopra l'immagine */}
        <TouchableOpacity
          style={styles.transparentButton1}
          onPress={() => navigation.navigate("LibriAntichi")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.transparentButton2}
          onPress={() => navigation.navigate("LibriProibiti")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.transparentButton3}
          onPress={() => navigation.navigate("Desk", { trovato })}
        ></TouchableOpacity>
      </View>
      {!trovato ? (
        <Text style={styles.description}>
          Sei entrato in una vasta biblioteca piena di libri misteriosi. L'aria
          è pesante e la luce fioca, ma c'è qualcosa di affascinante
          nell'ambiente. Devi scoprire il libro magico che ti permetterà di
          uscire. Ma attento: l'enigma non sarà facile.
        </Text>
      ) : (
        <>
          <Text style={styles.description}>Ho sentito un rumore, proveniva dalla scrivania! Controlliamo!</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  transparentButton3: {
    position: "absolute",
    top: "50%",
    left: "35%",
    height: 20,
    width: 55,
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  transparentButton1: {
    position: "absolute",
    top: "35%",
    left: "17%",
    height: 50,
    width: 55,
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  transparentButton2: {
    position: "absolute",
    top: "35%",
    left: "1%",
    height: 60,
    width: 40,
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
    marginTop: 40,
  },
  hint: {
    marginTop: 20,
    fontSize: 18,
    color: "green",
    fontStyle: "italic",
  },
});

export default GameScreen;
