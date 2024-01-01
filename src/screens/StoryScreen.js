import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

export default function StoryScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const dataFromParams = route.params?.generatedStory;
    if (dataFromParams) {
      setFetchedData(dataFromParams);
    }
  }, [route.params]);

  const handleTryAgain = () => {
    navigation.navigate("Home", {});
  };

  return (
    <LinearGradient colors={["#2E2045", "#050A30"]} style={styles.container}>
      <ImageBackground
        source={require("../../assets/StarBackground.png")}
        style={styles.ImageBackground}
      ></ImageBackground>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.StoryContainer}>
          <Text style={styles.title}>{fetchedData || "Loading..."}</Text>
        </View>
        <View style={styles.tryAgainContainer}>
          <TouchableOpacity
            style={styles.tryAgainButton}
            onPress={handleTryAgain}
          >
            <Text style={styles.tryAgainButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    padding: 20,
  },
  StoryContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  title: {
    color: "#f3bc77",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: -30,
  },
  tryAgainContainer: {
    marginTop: 40,
    marginBottom: 30,
    alignItems: "center",
  },
  tryAgainButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  tryAgainButtonText: {
    color: "white",
    fontSize: 16,
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
