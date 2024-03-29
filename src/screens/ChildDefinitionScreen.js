import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GenderSelection from "../components/Gender";

import AgeSlider from "../components/Slider";

export default function ChildDefinitionScreen({ route }) {
  const navigation = useNavigation();
  const [childAge, setChildAge] = useState(5);
  const [gender, setGender] = useState("Boy");
  const { storyLanguage } = route.params;

  const [childName, setChildName] = useState("");

  const handleNextPage = () => {
    if (!childName.trim()) {
      alert("Please enter your child's name");
      return;
    }
    navigation.navigate("TaleDetailsScreen", {
      storyLanguage,
      childAge,
      gender,
      childName,
    });
    
  };

  return (
    <LinearGradient colors={["#2E2045", "#050A30"]} style={styles.container}>
      <ImageBackground
        source={require("../../assets/StarBackground.png")}
        style={styles.ImageBackground}
      ></ImageBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Who is your child?</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Child's Name..."
          placeholderTextColor="#9587A6"
          value={childName}
          onChangeText={(text) => setChildName(text)}
        />
      </View>
      <AgeSlider childAge={childAge} setChildAge={setChildAge} />
      <GenderSelection gender={gender} setGender={setGender} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonBackground}
          onPress={handleNextPage}
        >
          <Text style={styles.buttonText}> Next →</Text>
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
    marginTop: 5,
    alignItemsgnItems: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderRadius: 5,
    marginRight: 10,
    paddingLeft: 10,
    color: "#f3bc77",
    borderColor: "#9587A6",
    borderWidth: 1,
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
