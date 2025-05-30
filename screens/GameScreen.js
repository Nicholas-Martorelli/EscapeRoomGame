import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const GameScreen = ({ navigation, route }) => {
  const { trovato } = route.params || { trovato: false };
  const { risolto } = route.params || { risolto: false };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Benvenuto nella Biblioteca Segreta</Text>
      <View style={styles.card}>
        <Image source={require("./img/libreria.jpg")} style={styles.image} />
        {/* Button trasparente sopra l'immagine */}
        <TouchableOpacity
          style={styles.transparentButtonAntichi}
          onPress={() => navigation.navigate("LibriAntichi", { trovato, risolto })}
        />
        <TouchableOpacity
          style={styles.transparentButtonProibiti}
          onPress={() => navigation.navigate("LibriProibiti", { trovato, risolto })}
        />
        <TouchableOpacity
          style={styles.transparentButtonScrivania}
          onPress={() => navigation.navigate("Desk", { trovato, risolto })}
        />
        <TouchableOpacity
          style={styles.transparentButtonPorta}
          onPress={() => navigation.navigate("SecretDoor", { trovato, risolto })}
        />
        <TouchableOpacity
          style={styles.transparentButtonFinestra}
          onPress={() => alert("Dalla finestra non si vede molto, ma sembra che ci sia un giardino fuori")}
        />
        <TouchableOpacity
          style={styles.transparentButton6}
          onPress={() => alert("Solo Antichi libri pieni di polvere, non sembrano interessanti")}
        />
      </View>
      {!trovato ? (
        <>
          <Text style={styles.description}>
            Sei entrato in una vasta biblioteca piena di libri misteriosi. L'aria
            è pesante e la luce fioca. Scopri gli indizi e risolvi gli indovinelli per uscire da qui!
          </Text>
          <TouchableOpacity
            style={styles.btnRegole}
            onPress={() =>
              alert(
                "Premi in giro per scoprire nuovi indizi! \n N.B. premi lentamente potrebbe volerci un attimo a caricare l'indizio"
              )
            }
          >
            <Text style={styles.btnRegoleText}>Suggerimento</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.description}>
            Ho sentito un rumore, proveniva dalla scrivania! Controlliamo!
          </Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: width * 0.05,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: width * 0.08,
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "center",
    color: "#e0e0e0",
  },
  card: {
    width: width * 0.95,
    height: height * 0.5,
    borderRadius: 15,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  transparentButton6: {
    position: "absolute",
    top: height * 0.22,
    left: width * 0.3,
    height: height * 0.08,
    width: width * 0.13,
    borderColor: "transparent",
    borderWidth: 1,
  },
  transparentButtonFinestra: {
    position: "absolute",
    top: height * 0.12,
    left: width * 0.01,
    height: height * 0.21,
    width: width * 0.13,
    borderColor: "transparent",
    borderWidth: 1,
  },
  transparentButtonPorta: {
    position: "absolute",
    top: height * 0.24,
    left: width * 0.44,
    height: height * 0.07,
    width: width * 0.08,
    borderColor: "transparent",
    borderWidth: 1,
  },
  transparentButtonScrivania: {
    position: "absolute",
    top: height * 0.32,
    left: width * 0.08,
    height: height * 0.18,
    width: width * 0.45,
    borderColor: "transparent",
    borderWidth: 1,
  },
  transparentButtonAntichi: {
    position: "absolute",
    top: height * 0.12,
    left: width * 0.75,
    height: height * 0.28,
    width: width * 0.15,
    borderColor: "transparent",
    borderWidth: 1,
  },
  transparentButtonProibiti: {
    position: "absolute",
    top: height * 0.18,
    left: width * 0.62,
    height: height * 0.14,
    width: width * 0.06,
    borderColor: "transparent",
    borderWidth: 1,
  },
  btnRegole: {
    backgroundColor: "#ffcc00",
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.05,
    borderRadius: 10,
    marginTop: height * 0.01,
  },
  btnRegoleText: {
    fontSize: width * 0.05,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  description: {
    fontSize: width * 0.05,
    textAlign: "center",
    marginBottom: height * 0,
    marginTop: height * 0,
    color: "#e0e0e0",
  },
});

export default GameScreen;
