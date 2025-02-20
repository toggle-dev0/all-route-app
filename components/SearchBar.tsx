import { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

export default function SearchBar() {
  const [placeHolderText, value] = useState("Search Location");
  return (
    <View style={styles.searchbar}>
      <Text>Search Icon</Text>
      <TextInput
        style={styles.input}
        onChangeText={value}
        value={placeHolderText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar: {
    width: "100%",
    backgroundColor: "#ddd",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
  },

  input: { width: "80%", color: "#888" },
});
