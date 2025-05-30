import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  BackHandler,
  Alert,
} from "react-native";

const FinalRoomScreen = ({ navigation }) => {
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [solved, setSolved] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Nuovo stato per gestire se l'utente ha premuto "Sono pronto"
  const [ready, setReady] = useState(false);

  const maxAttempts = 3;
  const validAnswers = ["madre", "mamma", "la madre", "la mamma"];

  const ghostRiddle =
    "Padre e figlio fanno un incidente e sfortunatamente il padre muore, mentre il figlio rimane gravemente ferito. Quest'ultimo viene portato d'urgenza al pronto soccorso per essere operato. Il chirurgo entra, lo guarda e dice: 'Non posso operarlo: è mio figlio!'. Chi è il Chirurgo?";

const checkAnswer = () => {
  if (solved || gameOver) return;

  const userAnswer = answer.toLowerCase().trim();

  if (validAnswers.includes(userAnswer)) {
    setSolved(true);
    setMessage(
      "👻 Fantasma: “Hai risposto correttamente! Ecco il libro dell’eterna conoscenza e la chiave per uscire. \n Grazie per aver giocato! ”"
    );
  } else {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    if (newAttempts >= maxAttempts) {
      setGameOver(true);
      setMessage(
        "Sei diventato un fantasma... Hai sbagliato troppe volte l'indovinello e ora sei intrappolato qui per sempre.\n Grazie per aver giocato!"
      );
    } else {
      setMessage(`❌ Risposta errata. Hai ${maxAttempts - newAttempts} tentativi rimasti.`);
    }
  }
  setAnswer("");
};

  // Funzione per mostrare alert con indovinello e abilitare l’input
  const handleReadyPress = () => {
    Alert.alert("Ultimo indovinello", ghostRiddle, [
      {
        text: "Ok",
        onPress: () => setReady(true),
      },
    ]);
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

      {/* Mostra la domanda e il bottone "Sono pronto" solo se non ready e non risolto/gameover */}
      {!ready && !solved && !gameOver && (
        <>
          <Text style={styles.riddle}>
            Hai solo 3 tentativi, sei pronto all'ultimo indovinello?
          </Text>
          <Button title="Sono pronto" onPress={handleReadyPress} />
        </>
      )}

      {/* Se ready, mostra input e bottone per rispondere */}
      {ready && !solved && !gameOver && (
        <>
          {/* Non mostriamo più l’indovinello come testo, perché è nell’alert */}
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
    height: 350,
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
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
