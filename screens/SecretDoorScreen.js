import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Image } from "react-native";

const SecretDoorScreen = ({ navigation }) => {



  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Questa porta sembra chiusa.
      </Text>
      <View style={styles.card}>
        <Image source={require("./img/libreria.jpg")} style={styles.image}/>
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
  },
  image:{
    width: "100%",
    height: "100%",
  },
  card:{
    width: "100%",
    height: 300,
    borderRadius: 15,
    overflow: "hidden",
    position: "relative",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
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
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    fontStyle: "italic",
    color: "green",
  },
});

export default SecretDoorScreen;
