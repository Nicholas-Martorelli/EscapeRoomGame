import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const SecretDoorScreen = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const checkCode = () => {
    if (code === "314") {
      setMessage("✅ Il meccanismo scatta e la porta si apre lentamente...");
    } else {
      setMessage("❌ Il codice è errato. Riprova!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚪 La Porta Segreta</Text>
      <Text style={styles.description}>
        Ti trovi davanti a una grande porta di legno scuro. Sulla serratura è inciso un simbolo di chiave.  
        Accanto alla porta c'è una piccola placca di metallo con tre cifre incise.
      </Text>

      <Text style={styles.hint}>🔑 La chiave che hai trovato ha un'incisione con il numero "π".</Text>

      {/* Input per inserire il codice */}
      <TextInput
        style={styles.input}
        placeholder="Inserisci il codice..."
        keyboardType="numeric"
        value={code}
        onChangeText={setCode}
      />

      <Button title="Sblocca la porta" onPress={checkCode} />

      {message !== "" && <Text style={styles.message}>{message}</Text>}

      {/* Passaggio alla prossima scena dopo la risposta corretta */}
      {message.includes("Il meccanismo scatta") && (
        <Button title="Entra nella stanza successiva" onPress={() => navigation.navigate("FinalRoom")} />
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

export default SecretDoorScreen;
