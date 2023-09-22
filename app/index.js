import { Link, router } from "expo-router";
import { Text, View } from "react-native-web";
import { Pressable } from "react-native";

export default function MainIndex() {
  return <View>
    <Pressable onPress={() => router.push("/dynamic")}><Text style={{ color: "blue" }}>Dynamic Base Path</Text></Pressable>
    <Pressable onPress={() => router.push("/dynamic/123/details")}><Text style={{ color: "blue" }}>Dynamic Details 123 with router.push</Text></Pressable>
    <Link href="/dynamic/123/details"><Text style={{ color: "blue" }}>Dynamic Details 123 with Link</Text></Link>
  
    <Pressable onPress={() => router.push("/dynamic-file/456")}><Text style={{ color: "blue" }}>Dynamic File 456 with router.push</Text></Pressable>
    <Link href="/dynamic-file/456"><Text style={{ color: "blue" }}>Dynamic File 456 with Link</Text></Link>
  </View>
}