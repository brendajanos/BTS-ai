import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import GenderSelection from "../components/Gender";
import Colors from "../constants/Colors";
import AgeSlider from "../components/Slider";
import Button from "../components/Button";


export default function ChildDefinitionScreen({ route }) {
  const navigation = useNavigation();
  const [childAge, setChildAge] = useState(5);
  const [gender, setGender] = useState("Boy");
  const [childName, setChildName] = useState("");
  const { storyLanguage } = route.params;

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
          placeholderTextColor= {Colors.primaryPurple}
          value={childName}
          onChangeText={(text) => setChildName(text)}
        />
      </View>
      <AgeSlider childAge={childAge} setChildAge={setChildAge} />
      <GenderSelection gender={gender} setGender={setGender} />
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
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    color: Colors.primaryText,
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
    color: Colors.primaryText,
    borderColor: Colors.primaryPurple,
    borderWidth: 1,
  },
  buttonContainer: {
    padding: 30,
    borderRadius: 25,
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
