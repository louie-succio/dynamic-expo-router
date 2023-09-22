import { router, useLocalSearchParams } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function DynamicFile() {
  const { dynamicFileId } = useLocalSearchParams()
  
  return <View>
    <Text style={{ color: "red" }}>Dynamic File Id {dynamicFileId}</Text>
    <Pressable onPress={() => router.push("/")}><Text style={{ color: "blue" }}>Home</Text></Pressable>
  </View>
}