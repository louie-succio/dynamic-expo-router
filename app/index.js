import { router } from "expo-router";
import { Text, View } from "react-native-web";
import { Pressable } from "react-native";

export default function MainIndex() {
  return <View>
    <Pressable onPress={() => router.push("/dynamic")}><Text style={{ color: "blue" }}>Dynamic Base Path</Text></Pressable>
    <Pressable onPress={() => router.push("/dynamic/123/details")}><Text style={{ color: "blue" }}>Dynamic Details 123</Text></Pressable>
  </View>
}