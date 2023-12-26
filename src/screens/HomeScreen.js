import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleGenerateStory = () => {
    navigation.navigate("StoryDefinitionScreen");
  };

  return (
    <LinearGradient colors={["#2E2045", "#050A30"]} style={styles.container}>
      <ImageBackground
        source={require("../../assets/StarBackground.png")}
        style={styles.ImageBackground}
      ></ImageBackground>
      <Image
        source={require("../../assets/Teddybear.jpeg")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>BedTime Stories</Text>
        </View>
        <Text style={styles.description}>
          Create magical and unique stories based on your child's personality
          and favourite characters
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonBackground}
          onPress={handleGenerateStory}
        >
          <Text style={styles.buttonText}>Generate Story</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ImageBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    opacity: 0.12,
  },
  image: {
    width: 380,
    height: 380,
    paddingLeft: 20,
    paddingRight: 30,
    overflow: "hidden",
    borderRadius: 200,
    marginBottom: 20,
    opacity: 0.9,
  },
  textContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  headingContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  heading: {
    color: "#f3bc77",
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    color: "#9587A6",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
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
});

export default HomeScreen;
