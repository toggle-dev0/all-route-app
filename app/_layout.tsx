import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function RootLayout() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const router = useRouter();
  // useEffect(() => {
  //   const hasOnBoarded = storage.getBoolean("hasOnBoarded");
  //   if (!hasOnBoarded) {
  //     router.replace("/(auth)/onbording");
  //   } else {
  //     setIsAuthenticated(true);
  //     router.replace("/(tabs)/home");
  //   }
  // }, []);
  return (
    // <GestureHandlerRootView>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    // </GestureHandlerRootView>
  );
}
