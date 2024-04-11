import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonBackground} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: Colors.primaryBtn,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 90,
  },
  buttonText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Button;
