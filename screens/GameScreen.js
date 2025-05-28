import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";

const GameScreen = ({ navigation, route }) => {
  const { trovato } = route.params || { trovato: false };
  const { risolto } = route.params || { trovato: false };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Benvenuto nella Biblioteca Segreta</Text>
      <View style={styles.card}>
        <Image source={require("./img/libreria.jpg")} style={styles.image} />
        {/* Button trasparente sopra l'immagine */}
        <TouchableOpacity
          style={styles.transparentButtonAntichi}
          onPress={() => navigation.navigate("LibriAntichi", { trovato, risolto })}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.transparentButtonProibiti}
          onPress={() => navigation.navigate("LibriProibiti", { trovato, risolto })}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.transparentButtonScrivania}
          onPress={() => navigation.navigate("Desk", { trovato, risolto })}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.transparentButtonPorta}
          onPress={() => navigation.navigate("SecretDoor", { trovato, risolto })}
        >
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.transparentButtonFinestra}
          onPress={() => alert("Dalla finestra non si vede molto, ma sembra che ci sia un giardino fuori")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={styles.transparentButton6}
          onPress={() => alert("Solo Antichi libri pieni di polvere, non sembrano interessanti")}
        ></TouchableOpacity>
      </View>
      {!trovato ? (
        <>
          <Text style={styles.description}>
            Sei entrato in una vasta biblioteca piena di libri misteriosi. L'aria
            è pesante e la luce fioca, ma c'è qualcosa di affascinante
            nell'ambiente. Devi scoprire il libro magico che ti permetterà di
            uscire. Ma attento: l'enigma non sarà facile.
          </Text>
<TouchableOpacity style={styles.btnRegole} onPress={() => alert("Premi in giro per scoprire nuovi indizi! \n N.B. premi lentamente potrebbe volerci un attimo a caricare l'indizio")}>
  <Text style={styles.btnRegoleText}>Suggerimento</Text>
</TouchableOpacity>

        </>
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
    height: 500,
    borderRadius: 15,
    overflow: "hidden",
    position: "relative",
  },
btnRegole: {
  backgroundColor: '#ffcc00',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 10,
  marginTop: 10,
},
btnRegoleText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: 'black',
  textAlign: 'center',
},
  image: {
    width: "100%",
    height: "100%",
  },
  transparentButton6: {
    position: "absolute",
    top: "45%",
    left: "33%",
    height: 60,
    width: 50,
    padding: 10,
    borderColor: "transparent",
    borderWidth: 1,
  },
  transparentButtonFinestra: {
    position: "absolute",
    top: "25%",
    left: "1%",
    height: 170,
    width: 50,
    padding: 10,
    borderColor: "transparent",
    borderWidth: 1,
  },
  transparentButtonPorta: {
    position: "absolute",
    top: "48%",
    left: "46%",
    height: 53,
    width: 30,
    padding: 10,
    borderColor: "transparent",
    borderWidth: 1,
  },
  transparentButtonScrivania: {
    position: "absolute",
    top: "65%",
    left: "10%",
    height: 130,
    width: 200,
    padding: 10,
    borderColor: "transparent",
    borderWidth: 1,
  },
  transparentButtonAntichi: {
    position: "absolute",
    top: "26%",
    left: "80%",
    height: 200,
    width: 70,
    padding: 10,
    borderColor: "transparent",
    borderWidth: 1,
  },
  transparentButtonProibiti: {
    position: "absolute",
    top: "40%",
    left: "65%",
    height: 100,
    width: 30,
    padding: 10,
    borderColor: "transparent",
    borderWidth: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
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
