import { ScrollView, StyleSheet, StatusBar, Text, View } from "react-native";

export default function Gallery() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView>
        <View style={styles.container}>
          <Text>Gallery Screen</Text>
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
