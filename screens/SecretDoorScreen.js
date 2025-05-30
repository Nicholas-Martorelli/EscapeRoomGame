import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from "react-native";

const SecretDoorScreen = ({ navigation, route }) => {
  const { trovato } = route.params || { trovato: false };
  const { risolto } = route.params || { risolto: false }; // corretto qui

  return (
    <View style={styles.container}>
      <View style={styles.buttonBack}>
        <Button title="Back" onPress={() => navigation.navigate("Game", { trovato, risolto })} />
      </View>
      <View style={styles.card}>
        {risolto ? (
          <>
            <Text style={styles.description}>Si è aperta una porta segreta!</Text>
            <Image source={require("./img/portaAperta.png")} style={styles.image} />
            <TouchableOpacity
              style={styles.transparentButtonCorridor}
              onPress={() => navigation.navigate("CorridorScene", { trovato, risolto })}
            />
          </>
        ) : (
          <>
            <Image source={require("./img/portachiusa.png")} style={styles.image} />
            <View style={{ marginTop: 20 }}>
              <Button title="Suggerimento" onPress={() => alert("Forse è meglio tornare più tardi qua")} />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#121212", // sfondo scuro
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: "cover",
    borderRadius: 10,
  },
  transparentButtonCorridor: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderColor: "white",
    borderWidth: 1,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#e0e0e0", // testo chiaro (se mai usato)
  },
  buttonBack: {
    position: "absolute",
    top: 50,
    left: 40,
    zIndex: 1,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    color: "#e0e0e0", // testo chiaro
  },
  hint: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    fontStyle: "italic",
    color: "#6a0dad",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    width: "80%",
    marginBottom: 20,
    borderRadius: 5,
    textAlign: "center",
    color: "#e0e0e0", // testo chiaro se usato
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    fontStyle: "italic",
    color: "green",
  },
});

export default SecretDoorScreen;
