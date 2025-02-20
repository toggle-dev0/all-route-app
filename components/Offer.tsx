import { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from "react";

interface Props {
  hotelName: string;
  location: string;
  rating: number;
  price?: number;
  theme?: string;
}

export default function Offer({
  hotelName,
  location,
  rating,
  price,
  theme,
}: Props) {
  const [like, setLike] = useState(false);
  if (theme === "likable") {
    return (
      <View style={styles.card}>
        <Pressable
          style={{
            ...styles.heart,
            backgroundColor: like ? "red" : "transparent",
          }}
          onPress={() => setLike(!like)}
        >
          {/* <View style={styles.heart}></View> */}
        </Pressable>
        <View style={styles.content}>
          <Text>{hotelName}</Text>
          <Text>{location}</Text>
          <View>
            <Text>{rating} stars</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.card}>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{`$${price}/Night`}</Text>
      </View>
      <View style={styles.content}>
        <Text>{hotelName}</Text>
        <Text>{location}</Text>
        <View>
          <Text>{rating} stars</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 200,
    backgroundColor: "#ddd",
    borderRadius: 10,
    position: "relative",
  },

  content: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },

  price: {
    color: "#fff",
  },

  priceContainer: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#2B2929",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 10,
    right: 10,
  },

  heart: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#888",
  },
});
