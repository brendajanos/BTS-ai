import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AdditionalCharacters from "../components/Character";
import LocationSetter from "../components/Location";
import { useNavigation } from "@react-navigation/native";

export default function TaleDetailsScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState("");
  const [characters, setCharacters] = useState([]);

  const handleNextPage = () => {
    navigation.navigate("ChildDetailsScreen");
  };

  return (
    <LinearGradient colors={["#2E2045", "#050A30"]} style={styles.container}>
      <ImageBackground
        source={require("../../assets/StarBackground.png")}
        style={styles.ImageBackground}
      ></ImageBackground>
      <View style={styles.titleContainer}></View>
      <LocationSetter location={location} setLocation={setLocation} />
      <AdditionalCharacters
        characters={characters}
        setCharacters={setCharacters}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonBackground}
          onPress={handleNextPage}
        >
          <Text style={styles.buttonText}>Generate Story</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    color: "#f3bc77",
    fontSize: 24,
    fontWeight: "bold",
  },
  inputContainer: {
    width: 200,
    alignItemsgnItems: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 10,
    color: "#2E2045",
  },
  buttonContainer: {
    padding: 30,
    borderRadius: 25,
  },
  buttonBackground: {
    backgroundColor: "#FFA500",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 90,
  },
  buttonText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "bold",
  },
  ImageBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.12,
  },
});
