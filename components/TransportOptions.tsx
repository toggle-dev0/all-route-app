import { StyleSheet, View } from "react-native";
import TransportOption from "./TransportOption";

const options = ["Flight", "Bus", "Train", "Ferry"];

export default function TransportOptions() {
  return (
    <View style={styles.menu}>
      {options.map((option, key) => (
        <TransportOption key={key} name={`Book a ${option}`} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
