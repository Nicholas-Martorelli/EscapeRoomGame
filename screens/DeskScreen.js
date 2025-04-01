import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const DeskScreen = ({ navigation, route}) => {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const { trovato } = route.params || { trovato: false };


  const checkAnswer = () => {
    if (answer.toLowerCase() === "respiro") {
      setMessage("✅ Corretto! Senti come se la porta si fosse finalmente aperta");
    } else {
      setMessage("❌ Sbagliato! Prova a pensare a qualcosa di impalpabile...");
    }
  };

  return (
    <View style={styles.container}>
            <View style={styles.buttonBack}>
            <Button title="Back" onPress={() => navigation.navigate("Game",{trovato})} />
            </View>
      <Text style={styles.title}>Una Scrivania</Text>
      {!trovato ? (
        <Text style={styles.description}>
          è una semplice scrivania, ma non sembra contenere nulla di interessante.
        </Text>

      ) : (
        <><Text style={styles.description}>
          Sulla scrivania che prima sembrava vuota ora è apparso un foglio ed una penna, e sul foglio c'è lo spazio per rispondere all'indovinello
        </Text><Text style={styles.riddle}>
            "Sono leggero come una piuma, ma nemmeno il più forte può tenermi a lungo. Cosa sono?"
          </Text>
          {/* Input per inserire la risposta */}
          <TextInput
            style={styles.input}
            placeholder="Scrivi la tua risposta..."
            value={answer}
            onChangeText={setAnswer}
          />
          {/* Passaggio alla prossima scena dopo la risposta corretta */}
          {message.includes("Corretto") && (
            <Button title="Prosegui alla Porta" onPress={() => navigation.navigate("SecretDoor")} />
          )}
          <Button title="Invia Risposta" onPress={checkAnswer} />
        </>

      )}



      {message !== "" && <Text style={styles.message}>{message}</Text>}

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
  buttonBack: {
    position: "absolute",
    top: 50,
    left: 40,
    zIndex: 1,  
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
