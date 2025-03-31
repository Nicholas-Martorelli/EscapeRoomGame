import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const FinalRoomScreen = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const checkPassword = () => {
    if (password.toLowerCase() === "sapientia") {
      setMessage("📖 Il libro si apre e una luce intensa riempie la stanza... Sei libero!");
    } else {
      setMessage("❌ La parola non è corretta. Riprova!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📖 Il Libro Magico</Text>
      <Text style={styles.description}>
        Sei arrivato alla fine del tuo viaggio. Il libro antico davanti a te sembra vibrare di energia.  
        Per aprirlo e fuggire, devi pronunciare la parola segreta...
      </Text>

      <Text style={styles.hint}>🔍 Hai trovato un indizio tra le pagine di un altro libro: "La conoscenza è la chiave".</Text>

      {/* Input per la parola segreta */}
      <TextInput
        style={styles.input}
        placeholder="Inserisci la parola segreta..."
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Apri il libro" onPress={checkPassword} />

      {message !== "" && <Text style={styles.message}>{message}</Text>}

      {/* Fine del gioco dopo la risposta corretta */}
      {message.includes("Il libro si apre") && (
        <Button title="🎉 Esci dalla Biblioteca" onPress={() => navigation.navigate("Home")} />
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

export default FinalRoomScreen;
