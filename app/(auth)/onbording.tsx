import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Onbording() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Onboarding Page</Text>
      <Button
        title="Proceed to Sign Up"
        onPress={() => router.push("/(auth)/sign_up")}
      />
    </View>
  );
}
