import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const LocationSetter = ({ location, setLocation }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.label}>Where does the story play?</Text>
      <TextInput
        style={styles.input}
        placeholder="Location..."
        placeholderTextColor="#9587A6"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderRadius: 5,
    marginRight: 10,
    color: "#f3bc77",
    borderColor: "#9587A6",
    borderWidth: 1,
    paddingLeft: 10,
  },
  textContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 20,
    color: "#f3bc77",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LocationSetter;
