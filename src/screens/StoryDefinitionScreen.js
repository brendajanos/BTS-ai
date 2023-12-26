import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";

export default function StoryDefinitionScreen() {
  const [childName, setChildName] = useState("");
  const [storyLanguage, setStoryLanguage] = useState("Hungarian");
  const [childAge, setChildAge] = useState(5);
  const [gender, setGender] = useState("Boy");
  const [location, setLocation] = useState("");
  const [showCharacterModal, setShowCharacterModal] = useState(false);
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  const addFavoriteCharacter = (character) => {
    setFavoriteCharacters([...favoriteCharacters, character]);
    setShowCharacterModal(false);
  };

  return (
    <LinearGradient colors={["#2E2045", "#050A30"]} style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Define your story</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Child's Name"
          value={childName}
          onChangeText={(text) => setChildName(text)}
        />
        <Picker
          style={styles.languagePicker}
          selectedValue={storyLanguage}
          onValueChange={(itemValue) => setStoryLanguage(itemValue)}
        >
          <Picker.Item label="Hungarian" value="Hungarian" />
          <Picker.Item label="English" value="English" />
          <Picker.Item label="German" value="German" />
          <Picker.Item label="French" value="French" />
          <Picker.Item label="Italian" value="Italian" />
        </Picker>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>Child's Age</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={12}
          value={childAge}
          onValueChange={(value) => setChildAge(value)}
        />
        <Text style={styles.value}>{childAge} years</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>Gender</Text>
        <View style={styles.radioContainer}>
          <TouchableOpacity
            style={[
              styles.radioButton,
              { backgroundColor: gender === "Boy" ? "#f3bc77" : "#2E2045" },
            ]}
            onPress={() => setGender("Boy")}
          >
            <Text style={styles.radioText}>Boy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.radioButton,
              { backgroundColor: gender === "Girl" ? "#f3bc77" : "#2E2045" },
            ]}
            onPress={() => setGender("Girl")}
          >
            <Text style={styles.radioText}>Girl</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>Where does the story play?</Text>
        <TextInput
          style={styles.input}
          placeholder="Location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>Additional Characters</Text>
        <Text style={styles.description}>
          Add your child's favourite character to the story!
        </Text>
        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => setShowCharacterModal(true)}
        >
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showCharacterModal}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Character</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Character Name"
              onChangeText={(text) => addFavoriteCharacter(text)}
            />
            <Button
              title="Cancel"
              onPress={() => setShowCharacterModal(false)}
            />
          </View>
        </View>
      </Modal>
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
    flexDirection: "row",
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
  languagePicker: {
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingLeft: 10,
    color: "#2E2045",
  },
  textContainer: {
    marginBottom: 20,
  },
  label: {
    color: "#f3bc77",
    fontSize: 18,
    fontWeight: "bold",
  },
  slider: {
    width: "80%",
    marginTop: 10,
    marginBottom: 10,
  },
  value: {
    color: "#f3bc77",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  radioButton: {
    width: 80,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  radioText: {
    color: "#fff",
    fontSize: 16,
  },
  plusButton: {
    backgroundColor: "#f3bc77",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  plusText: {
    color: "#2E2045",
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    color: "#f3bc77",
    fontSize: 14,
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    color: "#f3bc77",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInput: {
    height: 40,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    color: "#2E2045",
  },
});
