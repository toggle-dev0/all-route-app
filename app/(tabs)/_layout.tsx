import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="hotels"
        options={{ title: "Hotels", headerShown: false }}
      />
      <Tabs.Screen
        name="gallery"
        options={{ title: "Gallery", headerShown: false }}
      />
      <Tabs.Screen
        name="bookings"
        options={{ title: "Bookings", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
      />
    </Tabs>
  );
}
