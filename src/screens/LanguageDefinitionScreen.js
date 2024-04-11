import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LanguagePicker from "../components/Picker";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import Button from "../components/Button";

export default function LanguageDefinitionScreen() {
  const navigation = useNavigation();
  const [storyLanguage, setStoryLanguage] = useState("Hungarian");

  const handleNextPage = () => {
    navigation.navigate("ChildDefinitionScreen", {
      storyLanguage: storyLanguage,
    });
  };

  return (
    <LinearGradient colors={["#2E2045", "#050A30"]} style={styles.container}>
      <ImageBackground
        source={require("../../assets/StarBackground.png")}
        style={styles.ImageBackground}
      ></ImageBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Select a language:</Text>
      </View>
      <View style={styles.languagePickerContainer}>
        <LanguagePicker
          storyLanguage={storyLanguage}
          setStoryLanguage={setStoryLanguage}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={handleNextPage} />
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
  languagePickerContainer: {
    marginBottom: 100,
  },
  titleContainer: {
    paddingBottom: 10,
    marginBottom: 1,
  },
  title: {
    color: Colors.primaryText,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: -30,
  },
  buttonContainer: {
    padding: 30,
    marginTop: 30,
    borderRadius: 25,
  },
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
  ImageBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.12,
  },
});
