import { Text, View, StyleSheet } from "react-native";

interface Props {
  username: string;
}

export default function HomeHeader({ username }: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper}>
        <View style={styles.profilePic}></View>
        <Text style={styles.text}>Welcome, {username}</Text>
      </View>
      <Text>JK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },

  text: {
    fontWeight: "bold",
    fontSize: 20,
  },

  profilePic: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "#ddd",
  },
});
