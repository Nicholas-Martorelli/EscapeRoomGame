import React, { useState } from "react";
import {
  View,
  Text,
  Button,
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
          <Text style={styles.description}>Vai alla scricvania</Text>
          <Button title="Prosegui" onPress={() => navigation.navigate("Desk")} />
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
  transparentButton1: {
    position: "absolute",
    top: "20%",
    left: "60%",
    height: 200,
    width: 100,
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  transparentButton2: {
    position: "absolute",
    top: "20%",
    left: "40%",
    height: 200,
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
