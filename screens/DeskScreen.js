import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const DeskScreen = ({ navigation }) => {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  const checkAnswer = () => {
    if (answer.toLowerCase() === "respiro") {
      setMessage("✅ Corretto! Il cassetto si apre rivelando una chiave antica.");
    } else {
      setMessage("❌ Sbagliato! Prova a pensare a qualcosa di impalpabile...");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🖋️ La Scrivania Misteriosa</Text>
      <Text style={styles.description}>
        Ti siedi davanti a un’antica scrivania in legno massiccio. Sopra di essa trovi 
        il segnalibro con l’enigma trovato tra i libri:
      </Text>
      <Text style={styles.riddle}>
        **"Sono leggero come una piuma, ma nemmeno il più forte può tenermi a lungo. Cosa sono?"**
      </Text>

      {/* Input per inserire la risposta */}
      <TextInput
        style={styles.input}
        placeholder="Scrivi la tua risposta..."
        value={answer}
        onChangeText={setAnswer}
      />

      <Button title="Invia Risposta" onPress={checkAnswer} />

      {message !== "" && <Text style={styles.message}>{message}</Text>}

      {/* Passaggio alla prossima scena dopo la risposta corretta */}
      {message.includes("Corretto") && (
        <Button title="Prosegui alla Porta Segreta" onPress={() => navigation.navigate("SecretDoor")} />
      )}
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
  riddle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    fontStyle: "italic",
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
    color: "green",
    fontStyle: "italic",
  },
});

export default DeskScreen;
