import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AdditionalCharacters = ({
  showCharacterModal,
  setShowCharacterModal,
}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.label}>Additional Characters</Text>
      <Text style={styles.description}>
        Add your child's favourite character to the story!
      </Text>
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => setShowCharacterModal(true)}
      >
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
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
    color: "#f3bc77",
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
});

export default AdditionalCharacters;
