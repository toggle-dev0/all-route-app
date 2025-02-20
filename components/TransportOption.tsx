import { View, Text, StyleSheet } from "react-native";

interface Props {
  name: string;
}
export default function TransportOption({ name }: Props) {
  return (
    <View>
      <View style={styles.option}></View>
      <View style={styles.transportTitle}>
        <Text>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    width: 80,
    height: 80,
    backgroundColor: "#ddd",
    borderRadius: "50%",
  },

  transportTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
