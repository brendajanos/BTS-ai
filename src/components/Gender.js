import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GenderSelection = ({ gender, setGender }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.label}>Gender</Text>
      <View style={styles.radioContainer}>
        <TouchableOpacity
          style={[
            styles.radioButton,
            { backgroundColor: gender === "Boy" ? "#f3bc77" : "#2E2045" },
          ]}
          onPress={() => setGender("Boy")}
        >
          <Text style={styles.radioText}>Boy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.radioButton,
            { backgroundColor: gender === "Girl" ? "#f3bc77" : "#2E2045" },
          ]}
          onPress={() => setGender("Girl")}
        >
          <Text style={styles.radioText}>Girl</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginBottom: 20,
  },
  label: {
    color: "#f3bc77",
    fontSize: 18,
    fontWeight: "bold",
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  radioButton: {
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  radioText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default GenderSelection;
