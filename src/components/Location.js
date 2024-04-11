import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const LocationSetter = ({ location, setLocation }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.label}>Where does the story play?</Text>
      <TextInput
        style={styles.input}
        placeholder="Location..."
        placeholderTextColor={Colors.primaryPurple}
        value={location}
        onChangeText={(text) => setLocation(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderRadius: 5,
    marginRight: 10,
    color: Colors.primaryText,
    borderColor: Colors.primaryPurple,
    borderWidth: 1,
    paddingLeft: 10,
  },
  textContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 20,
    color: Colors.primaryText,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LocationSetter;
