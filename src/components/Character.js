import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";

const AdditionalCharacters = ({ characters, setCharacters }) => {
  const [characterName, setCharacterName] = useState("");

  const addCharacter = () => {
    setCharacters([...characters, characterName]);
    setCharacterName("");
    setShowCharacterModal(false);
  };

  return (
    <View style={styles.textContainer}>
      <Text style={styles.label}>Additional Characters</Text>
      <Text style={styles.description}>
        Add your child's favourite character to the story!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Character's Name..."
        placeholderTextColor="#9587A6"
        value={characterName}
        onChangeText={(text) => setCharacterName(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  plusButton: {
    backgroundColor: "#f3bc77",
    width: 40,
    alignContent: "center",
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  plusText: {
    color: "#2E2045",
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    color: "#9587A6",
    fontSize: 14,
    marginBottom: 20,
    marginTop: 5,
  },
  label: {
    color: "#f3bc77",
    alignContent: "flex-start",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderRadius: 5,
    width: 225,
    marginRight: 10,
    color: "#f3bc77",
    borderColor: "#9587A6",
    borderWidth: 1,
    paddingLeft: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    color: "#f3bc77",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInput: {
    height: 40,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    color: "#2E2045",
  },
});

export default AdditionalCharacters;
