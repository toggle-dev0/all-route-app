import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Offer from "./Offer";

interface Props {
  price?: number;
  theme?: string;
}

export default function Offers({ price, theme }: Props) {
  return (
    <View style={styles.list}>
      <Offer
        hotelName="Five Star Hotel"
        location="Calabar"
        rating={4}
        price={price}
        theme={theme}
      />
      <Offer
        hotelName="Five Star Hotel"
        location="Calabar"
        rating={4}
        price={price}
        theme={theme}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
