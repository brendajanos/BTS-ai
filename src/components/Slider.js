import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const AgeSlider = ({ childAge, setChildAge }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.label}>Child's Age</Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={12}
        value={Math.round(childAge)}
        onValueChange={(value) => setChildAge(value)}
      />
      <Text style={styles.value}>{Math.round(childAge)} years</Text>
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
  slider: {
    width: 200,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  value: {
    color: "#f3bc77",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default AgeSlider;
