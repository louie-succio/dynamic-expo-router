import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function DynamicFileLayout() {
  return <View>
    <View style={{ paddingBottom: 15 }}><Text>Dynamic File Layout</Text></View>
    <Slot/>
  </View>
}