import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  BackHandler,
} from "react-native";

const CorridorScene = ({ navigation, route }) => {
  const { trovato, risolto } = route.params || {};

  const handleWrongDoor = () => {
    Alert.alert(
      "Errore fatale",
      "Dietro la porta si nascondeva una creatura... Ti ha ucciso.",
      [
        {
          text: "Chiudi l'app",
          onPress: () => BackHandler.exitApp(),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Il Corridoio delle Ombre</Text>
      <View style={styles.card}>
        <Image source={require("./img/Corridoio.png")} style={styles.image} />

        {/* Statua con volto */}
        <TouchableOpacity
          style={styles.transparentButtonStatuaConVolto}
          onPress={() =>
            Alert.alert("Statua Parlante", "“Buttami via quando ti servo...”")
          }
        />

        {/* Statua senza volto */}
        <TouchableOpacity
          style={styles.transparentButtonStatuaSenzaVolto}
          onPress={() =>
            Alert.alert("Statua Silente", "“...riprendimi quando non hai più bisogno di me.”")
          }
        />

        {/* Torcia */}
        <TouchableOpacity
          style={styles.transparentButtonTorcia}
          onPress={() =>
            Alert.alert("Torcia", "Per un attimo si vedono simboli brillare sul pavimento...")
          }
        />

        {/* Porte */}
        <TouchableOpacity
          style={styles.transparentButtonPortaAncora}
          onPress={() =>
            navigation.navigate("FinalRoomScreen", { trovato, risolto })
          }
        />
        <TouchableOpacity
          style={styles.transparentButtonPortaPiuma}
          onPress={handleWrongDoor}
        />
        <TouchableOpacity
          style={styles.transparentButtonPortaLuna}
          onPress={handleWrongDoor}
        />
      </View>
      <>
        <Text style={styles.description}>
          L’indovinello è la chiave. Scegli la porta giusta... sbagliare potrebbe costarti la vita.
        </Text>
        <TouchableOpacity style={styles.btnRegole} onPress={() => alert("Le statue ti daranno un indizio su quale porta scegliere. Premi sulle statue per scoprire di più.")}>
          <Text style={styles.btnRegoleText}>Suggerimento</Text>
        </TouchableOpacity>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",  // nuovo sfondo scuro
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#e0e0e0",  // nuovo colore testo chiaro
  },
  card: {
    width: "100%",
    height: 400,
    borderRadius: 15,
    overflow: "hidden",
    position: "relative",
    padding: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 20,
    color: "#e0e0e0",  // nuovo colore testo chiaro
  },
  transparentButtonStatuaConVolto: {
    position: "absolute",
    top: "15%",
    left: "5%",
    height: 300,
    width: 60,
  },
  transparentButtonStatuaSenzaVolto: {
    position: "absolute",
    top: "15%",
    right: "5%",
    height: 300,
    width: 60,
  },
  transparentButtonTorcia: {
    position: "absolute",
    top: "30%",
    left: "25%",
    height: 50,
    width: 50,
  },
  transparentButtonPortaAncora: {
    position: "absolute",
    bottom: "35%",
    left: "33%",
    height: 130,
    width: 40,
  },
  transparentButtonPortaPiuma: {
    position: "absolute",
    bottom: "35%",
    left: "47%",
    height: 130,
    width: 40,
  },
  transparentButtonPortaLuna: {
    position: "absolute",
    bottom: "35%",
    left: "60%",
    height: 130,
    width: 40,
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
});

export default CorridorScene;
