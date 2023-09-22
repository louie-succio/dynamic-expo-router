import { Slot, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native-web";

export default function DynamicFileLayout() {
  
  return <View>
    <View style={{ paddingBottom: 15 }}><Text>Dynamic File Layout</Text></View>
    <Slot/>
  </View>
}