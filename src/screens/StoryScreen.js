import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation, useRoute } from "@react-navigation/native";


export default function StoryScreen() {
  const route = useRoute();
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const dataFromParams = route.params?.fetchedData;
    if (dataFromParams) {
      setFetchedData(dataFromParams);
    }
  }, [route.params]);

  return (
    <LinearGradient colors={["#2E2045", "#050A30"]} style={styles.container}>
      <ImageBackground
        source={require("../../assets/StarBackground.png")}
        style={styles.ImageBackground}
      ></ImageBackground>
      <View style={styles.StoryContainer}>
        <Text style={styles.title}>
          Generated Story:{" "}
          {fetchedData ? fetchedData.generatedStory : "Loading..."}
        </Text>
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
    color: "#f3bc77",
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
