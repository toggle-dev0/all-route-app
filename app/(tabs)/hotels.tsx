import { ScrollView, StyleSheet, StatusBar, Text, View } from "react-native";

export default function Hotels() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView>
        <View style={styles.container}>
          <Text>Hotels Screen</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
