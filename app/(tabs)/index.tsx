import HomeHeader from "@/components/HomeHeader";
import Offers from "@/components/Offers";
import SearchBar from "@/components/SearchBar";
import SectionWrapper from "@/components/SectionWrapper";
import TransportOptions from "@/components/TransportOptions";
import { Text, View, StyleSheet, StatusBar, ScrollView } from "react-native";

const username = "Comfort";

export default function Index() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <StatusBar barStyle={"dark-content"} />
      <ScrollView>
        <View style={styles.container}>
          <HomeHeader username={username} />
          <SearchBar />
          <TransportOptions />
          <SectionWrapper
            heading="Need a place to stay"
            description="Let's find the best house for you"
          >
            <Offers price={30} />
          </SectionWrapper>
          <SectionWrapper
            heading="Need ideas on your next trip"
            description="Check out these places"
          >
            <Offers theme="likable" />
          </SectionWrapper>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});
