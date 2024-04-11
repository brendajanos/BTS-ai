import React from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";


const LanguagePicker = ({ storyLanguage, setStoryLanguage }) => {
  return (
    <Picker
      style={styles.languagePicker}
      selectedValue={storyLanguage}
      onValueChange={(itemValue) => setStoryLanguage(itemValue)}
      itemStyle={{ color: "white" }}
    >
      <Picker.Item label="Hungarian" value="Hungarian" />
      <Picker.Item label="English" value="English" />
      <Picker.Item label="German" value="German" />
      <Picker.Item label="French" value="French" />
      <Picker.Item label="Italian" value="Italian" />
    </Picker>
  );
};

const styles = StyleSheet.create({
  languagePicker: {
    flex: 1,
    width: 233,
    borderRadius: 5,
    paddingLeft: 10,
    maxHeight: 100,
  },
});

export default LanguagePicker;
