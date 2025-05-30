import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  BackHandler,
} from "react-native";

const FinalRoomScreen = ({ navigation }) => {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [solved, setSolved] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const maxAttempts = 3;
  const correctAnswer = "nuvola";

  const ghostRiddle =
    "Cammino senza piedi, volo senza ali, piango senza occhi. Cosa sono?";

  const checkAnswer = () => {
    if (solved || gameOver) return;

    if (answer.toLowerCase().trim() === correctAnswer) {
      setSolved(true);
      setMessage(
        "👻 Fantasma: “Hai risposto correttamente! Ecco il libro dell’eterna conoscenza e la chiave per uscire.”"
      );
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= maxAttempts) {
        setGameOver(true);
        setMessage(
          "Sei diventato un fantasma... Hai sbagliato troppe volte l'indovinello e ora sei intrappolato qui per sempre."
        );
      } else {
        setMessage(`❌ Risposta errata. Hai ${maxAttempts - newAttempts} tentativi rimasti.`);
      }
    }
    setAnswer("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Il Fantasma della Biblioteca</Text>

      <View style={styles.imageContainer}>
        {!solved && !gameOver && (
          <Image
            source={require("./img/ghost.library.png")}
            style={styles.image}
          />
        )}

        {solved && (
          <Image
            source={require("./img/good_ending_book.png")}
            style={styles.image}
          />
        )}

        {gameOver && (
          <Image
            source={require("./img/bad_ending_ghost.png")}
            style={styles.image}
          />
        )}
      </View>

      {!solved && !gameOver && <Text style={styles.riddle}>{ghostRiddle}</Text>}

      {!solved && !gameOver && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Scrivi la tua risposta..."
            value={answer}
            onChangeText={setAnswer}
            editable={!solved && !gameOver}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Button title="Prova" onPress={checkAnswer} />
        </>
      )}

      {(solved || gameOver) && (
        <>
          <Text style={solved ? styles.goodEndingMessage : styles.message}>
            {message}
          </Text>

          {solved && (
            <Button
              title="🎉 Esci dalla Biblioteca"
              onPress={() => navigation.navigate("Home")}
            />
          )}

          {gameOver && (
            <Button
              title="Chiudi l'app"
              onPress={() => BackHandler.exitApp()}
            />
          )}
        </>
      )}

      {!solved && message !== "" && !gameOver && (
        <Text style={styles.message}>{message}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#111",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
  imageContainer: {
    width: "100%",
    height: 500,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  riddle: {
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 15,
    textAlign: "center",
    color: "#ddd",
  },
  input: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#555",
    padding: 10,
    width: "100%",
    marginBottom: 15,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#222",
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: "italic",
    color: "#ff6666",
    textAlign: "center",
  },
  goodEndingMessage: {
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 20,
    textAlign: "center",
    color: "#ffcc00",
  },
});

export default FinalRoomScreen;
