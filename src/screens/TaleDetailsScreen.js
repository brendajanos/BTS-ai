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
import OpenAI from "openai";
import axios from "axios";
import Colors from "../constants/Colors";
import { API_KEY } from "@env";


const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
  apiKey: API_KEY
});

export default function TaleDetailsScreen({ route }) {
  const navigation = useNavigation();
  const [location, setLocation] = useState("");
  const [characters, setCharacters] = useState("");
  const [loading, setLoading] = useState(false);
  const { storyLanguage, childAge, gender, childName } = route.params;

  const handleNextPage = async () => {
    if (!location.trim() || !characters.trim()) {
      alert("Please enter both location and characters");
      return;
    }
    const input = `Write a short (about 200 words) story in ${storyLanguage} language about a child who is a ${gender} and ${childAge} years old and has a name of ${childName}. The story should contain location: ${location}, and characters like: ${characters}`;

    const requestData = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    };

    const apiUrl = "https://api.openai.com/v1/chat/completions";

    try {
      setLoading(true);
      const chatCompletion = await axios.post(apiUrl, requestData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openai.apiKey}`,
        },
      });

      const generatedStory = chatCompletion.data.choices[0].message.content;
      navigation.navigate("StoryScreen", {
        storyLanguage,
        childAge,
        gender,
        childName,
        location,
        characters,
        generatedStory,
      });
    } catch (error) {
      console.error("API Error:", error.message);
    } finally {
      setLoading(false);
    }
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
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "Loading..." : "Generate Story"}
          </Text>
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
  buttonContainer: {
    padding: 30,
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
