import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Colors from "../constants/Colors";

const AdditionalCharacters = ({ characters, setCharacters }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.label}>Additional Characters</Text>
      <Text style={styles.description}>
        Add your child's favourite character to the story!
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Events or character's Name..."
        placeholderTextColor={Colors.primaryPurple}
        value={characters}
        onChangeText={(text) => setCharacters(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  description: {
    color: Colors.primaryPurple,
    fontSize: 14,
    marginBottom: 20,
    marginTop: 5,
  },
  label: {
    color: Colors.primaryText,
    alignContent: "flex-start",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderRadius: 5,
    width: 225,
    marginRight: 10,
    color: Colors.primaryText,
    borderColor: Colors.primaryPurple,
    borderWidth: 1,
    paddingLeft: 10,
  },
});

export default AdditionalCharacters;
