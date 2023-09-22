import { Text, View } from "react-native-web";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Pressable } from "react-native";

export default function DynamicIdDetails() {
  const { dynamicId } = useLocalSearchParams()
  
  return <View>
    <Text style={{ color: "red" }}>Dynamic Details {dynamicId}</Text>
    <Link href="/dynamic"><Text style={{ color: "blue" }}>Dynamic Index</Text></Link>
    <Pressable onPress={() => router.push("/")}><Text style={{ color: "blue" }}>Home</Text></Pressable>
  </View>
}