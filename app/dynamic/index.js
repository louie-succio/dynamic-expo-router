import { router } from "expo-router";
import { Pressable, Text } from "react-native";

export default function DynamicIndex() {
  // return <Link href="/dynamic/123/details"><Text style={{ color: "blue" }}>Dynamic Details 123</Text></Link>
  return <Pressable onPress={() => router.push("/dynamic/123/details")}><Text style={{ color: "blue" }}>Dynamic Details 123</Text></Pressable>
}