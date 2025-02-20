import { View, Text, StyleSheet } from "react-native";

interface Props {
  heading: string;
  description: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  heading,
  description,
  children,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>{heading}</Text>
        <Text>See All</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },

  heading: {
    fontWeight: "bold",
    fontSize: 20,
  },

  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  description: {
    color: "#525252",
  },
});
